// Настройки приложения
let appSettings = {
    onlineMode: false,
    darkTheme: false
};


// Система персонажей
let characters = [];
let activeCharacterId = null;

// Дефолтный персонаж - Рикс (Крик Солнца)
const defaultCharacter = {
    id: 'rix-tabaxi',
    name: 'Рикс (Крик Солнца)',
    race: 'tabaxi',
    class: 'rogue',
    level: 3,
    str: 10,
    dex: 16,
    con: 10,
    int: 12,
    wis: 13,
    cha: 15,
    hpMax: 13,
    ac: 14,
    money: {
        gold: 0,
        silver: 0,
        copper: 0
    }
};

// Получить активного персонажа
function getActiveCharacter() {
    return characters.find(c => c.id === activeCharacterId) || defaultCharacter;
}

let character = defaultCharacter;

// Начальный инвентарь с категориями
const defaultInventory = {
    weapon: [
        { name: 'Кинжал', detail: '1к4 колющий', count: 1, equipped: true },
        { name: 'Короткий меч', detail: '1к6 колющий', count: 1, equipped: true },
        { name: 'Кошачьи когти', detail: '1к4 рубящий', count: 1, equipped: true },
        {
            name: 'Веревка с металлическим наболдашником',
            detail: '1к8 дробящий',
            count: 1,
            equipped: false,
            learnable: true,
            target: 100,
            dice: '1d4',
            ability: 'str',
            progress: 0
        }
    ],
    armor: [
        { name: 'Кожаная броня', detail: '10 фунтов, КБ 11 + Ловкость', count: 1, equipped: true }
    ],
    tool: [
        { name: 'Воровские инструменты', detail: '1 фунт', count: 1, equipped: false },
        { name: 'Набор игральных костей', detail: '0.5 фунта', count: 1, equipped: false }
    ],
    consumable: [
        { name: 'Рацион', detail: '', count: 6, equipped: false },
        { name: 'Факел', detail: '', count: 10, equipped: false },
        { name: 'Ягодки Боблина', detail: '+1 хп', count: 1, equipped: false }
    ],
    ingredient: [
        { name: 'Луковые шелушки', detail: '', count: 1, equipped: false },
        { name: 'Брикетик жира', detail: '', count: 1, equipped: false },
        { name: 'Клочки овечьей шерсти', detail: '', count: 1, equipped: false },
        { name: 'Порошки разных цветов', detail: '', count: 10, equipped: false },
        { name: 'Лепестки роз', detail: '', count: 10, equipped: false },
        { name: 'Сверчок', detail: '', count: 10, equipped: false }
    ],
    misc: [
        { name: 'Золотой перстень за 11 монет', detail: '', count: 1, equipped: false },
        { name: 'Неплохая шляпа в честь Иврана', detail: '', count: 1, equipped: false },
        {
            name: 'Книга "Почему мы опять не взяли с собой веревку"',
            detail: 'Читаю и набираю 50 - чет будет',
            count: 1,
            equipped: false,
            learnable: true,
            target: 50,
            dice: '1d4',
            ability: 'int',
            progress: 0
        },
        { name: 'Пеньковая веревка', detail: '30/60/20 фт', count: 3, equipped: false },
        { name: 'Карта морских путей контрабандистов', detail: '', count: 1, equipped: false },
        { name: 'Бумажная птичка', detail: '', count: 1, equipped: false },
        { name: 'Мел', detail: '', count: 1, equipped: false }
    ]
};

// Навыки
const skills = [
    { name: 'Акробатика', ability: 'dex', proficient: true, expert: false },
    { name: 'Анализ', ability: 'int', proficient: false, expert: false },
    { name: 'Атлетика', ability: 'str', proficient: true, expert: false },
    { name: 'Внимательность', ability: 'wis', proficient: true, expert: true },
    { name: 'Выживание', ability: 'wis', proficient: false, expert: false },
    { name: 'Выступление', ability: 'cha', proficient: false, expert: false },
    { name: 'Запугивание', ability: 'cha', proficient: false, expert: false },
    { name: 'История', ability: 'int', proficient: false, expert: false },
    { name: 'Ловкость рук', ability: 'dex', proficient: false, expert: false },
    { name: 'Магия', ability: 'int', proficient: false, expert: false },
    { name: 'Медицина', ability: 'wis', proficient: false, expert: false },
    { name: 'Обман', ability: 'cha', proficient: true, expert: false },
    { name: 'Природа', ability: 'int', proficient: false, expert: false },
    { name: 'Проницательность', ability: 'wis', proficient: true, expert: false },
    { name: 'Религия', ability: 'int', proficient: false, expert: false },
    { name: 'Скрытность', ability: 'dex', proficient: true, expert: false },
    { name: 'Убеждение', ability: 'cha', proficient: true, expert: true },
    { name: 'Уход за животными', ability: 'wis', proficient: false, expert: false }
];

// Функция для броска кости
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollMultipleDice(count, sides) {
    const rolls = [];
    for (let i = 0; i < count; i++) {
        rolls.push(rollDice(sides));
    }
    return rolls;
}

// Расчет модификатора
function calculateModifier(score) {
    return Math.floor((score - 10) / 2);
}

// Расчет бонуса мастерства
function getProficiencyBonus(level) {
    return Math.ceil(level / 4) + 1;
}

// Расчет урона скрытой атаки
function getSneakAttackDice(level) {
    return Math.ceil(level / 2);
}

// Получить модификатор
function getMod(ability) {
    return calculateModifier(character[ability]);
}

// Обновить все расчеты
function updateAllCalculations() {
    const prof = getProficiencyBonus(character.level);

    // Модификаторы
    const strMod = getMod('str');
    const dexMod = getMod('dex');
    const conMod = getMod('con');
    const intMod = getMod('int');
    const wisMod = getMod('wis');
    const chaMod = getMod('cha');

    // Обновляем таблицу характеристик
    document.getElementById('str-score').textContent = character.str;
    document.getElementById('dex-score').textContent = character.dex;
    document.getElementById('con-score').textContent = character.con;
    document.getElementById('int-score').textContent = character.int;
    document.getElementById('wis-score').textContent = character.wis;
    document.getElementById('cha-score').textContent = character.cha;

    document.getElementById('str-mod').textContent = strMod >= 0 ? `+${strMod}` : strMod;
    document.getElementById('dex-mod').textContent = dexMod >= 0 ? `+${dexMod}` : dexMod;
    document.getElementById('con-mod').textContent = conMod >= 0 ? `+${conMod}` : conMod;
    document.getElementById('int-mod').textContent = intMod >= 0 ? `+${intMod}` : intMod;
    document.getElementById('wis-mod').textContent = wisMod >= 0 ? `+${wisMod}` : wisMod;
    document.getElementById('cha-mod').textContent = chaMod >= 0 ? `+${chaMod}` : chaMod;

    // Спасброски (Ловкость и Интеллект владеют)
    document.getElementById('str-save').textContent = strMod >= 0 ? `+${strMod}` : strMod;
    document.getElementById('dex-save').textContent = `+${dexMod + prof}`;
    document.getElementById('con-save').textContent = conMod >= 0 ? `+${conMod}` : conMod;
    document.getElementById('int-save').textContent = `+${intMod + prof}`;
    document.getElementById('wis-save').textContent = wisMod >= 0 ? `+${wisMod}` : wisMod;
    document.getElementById('cha-save').textContent = chaMod >= 0 ? `+${chaMod}` : chaMod;

    // Основные показатели
    document.getElementById('level-display').textContent = character.level;
    document.getElementById('hp-max-display').textContent = character.hpMax;
    document.getElementById('ac-display').textContent = character.ac;
    document.getElementById('init-display').textContent = `+${dexMod}`;
    document.getElementById('prof-bonus-display').textContent = `+${prof}`;

    // Пассивное восприятие (10 + Внимательность с экспертизой)
    const perceptionBonus = wisMod + (prof * 2); // Экспертиза
    document.getElementById('passive-perception').textContent = 10 + perceptionBonus;

    // Обновляем навыки
    updateSkillsList();

    // Обновляем атаки
    updateWeaponCalculations();

    // Обновляем заклинания
    updateSpellCalculations();

    // Обновляем скрытую атаку
    updateSneakAttack();
}

// Обновить список навыков
function updateSkillsList() {
    const prof = getProficiencyBonus(character.level);
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';

    skills.forEach(skill => {
        const mod = getMod(skill.ability);
        let bonus = mod;

        if (skill.expert) {
            bonus += prof * 2;
        } else if (skill.proficient) {
            bonus += prof;
        }

        const div = document.createElement('div');
        div.className = 'skill-row';
        if (skill.expert) div.classList.add('expert');
        else if (skill.proficient) div.classList.add('proficient');

        div.innerHTML = `
            <span class="skill-name">${skill.name}</span>
            <span class="skill-value">${bonus >= 0 ? '+' : ''}${bonus}</span>
        `;
        skillsList.appendChild(div);
    });
}

// Обновить расчеты оружия
function updateWeaponCalculations() {
    const prof = getProficiencyBonus(character.level);
    const dexMod = getMod('dex');
    const strMod = getMod('str');

    const dexHit = dexMod + prof;
    const strHit = strMod + prof;

    // Кинжал
    document.getElementById('dagger-hit-calc').innerHTML =
        `<strong>Попадание:</strong> 1к20 + Ловкость (${dexMod}) + Мастерство (${prof}) = <strong>+${dexHit}</strong>`;
    document.getElementById('dagger-dmg-calc').innerHTML =
        `<strong>Урон:</strong> 1к4 + Ловкость (${dexMod}) = <strong>1к4+${dexMod}</strong> колющий`;

    // Короткий меч
    document.getElementById('sword-hit-calc').innerHTML =
        `<strong>Попадание:</strong> 1к20 + Ловкость (${dexMod}) + Мастерство (${prof}) = <strong>+${dexHit}</strong>`;
    document.getElementById('sword-dmg-calc').innerHTML =
        `<strong>Урон:</strong> 1к6 + Ловкость (${dexMod}) = <strong>1к6+${dexMod}</strong> колющий`;

    // Когти
    document.getElementById('claws-hit-calc').innerHTML =
        `<strong>Попадание:</strong> 1к20 + Ловкость (${dexMod}) + Мастерство (${prof}) = <strong>+${dexHit}</strong>`;
    document.getElementById('claws-dmg-calc').innerHTML =
        `<strong>Урон:</strong> 1к4 + Сила (${strMod}) = <strong>1к4+${strMod}</strong> рубящий`;
}

// Получить количество слотов заклинаний для мистического плута
function getSpellSlots(level) {
    if (level >= 19) return 4;
    if (level >= 3) return 3;
    return 2;
}

// Обновить расчеты заклинаний
function updateSpellCalculations() {
    const prof = getProficiencyBonus(character.level);
    const intMod = getMod('int');

    const spellDC = 8 + prof + intMod;
    const spellAttack = prof + intMod;

    document.getElementById('spell-dc-calc').innerHTML =
        `<strong>Сила заклинаний</strong><div class="spell-stat-value">${spellDC}</div><div class="spell-stat-formula">8 + Мастерство (${prof}) + Интеллект (${intMod})</div>`;
    document.getElementById('spell-attack-calc').innerHTML =
        `<strong>Бонус атаки заклинаниями</strong><div class="spell-stat-value">+${spellAttack}</div><div class="spell-stat-formula">Мастерство (${prof}) + Интеллект (${intMod})</div>`;

    // Обновляем inline значения
    document.getElementById('spell-dc-inline').textContent = spellDC;
    document.getElementById('spell-dc-inline2').textContent = spellDC;

    // Обновляем количество слотов в зависимости от уровня
    const slots = getSpellSlots(character.level);
    document.getElementById('spell-slots-total').textContent = slots;

    // Обновляем количество чекбоксов слотов
    updateSpellSlotsUI(slots);
}

// Обновить UI слотов заклинаний
function updateSpellSlotsUI(totalSlots) {
    const container = document.querySelector('.spell-slots .slot-tracker');
    if (!container) return;

    container.innerHTML = '';
    for (let i = 0; i < totalSlots; i++) {
        const label = document.createElement('label');
        label.className = 'slot-checkbox';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'spell-slot-check';

        const savedState = localStorage.getItem(`${activeCharacterId}-spell-slot-${i}`);
        if (savedState === 'checked') {
            input.checked = true;
        }

        input.addEventListener('change', () => {
            localStorage.setItem(`${activeCharacterId}-spell-slot-${i}`, input.checked ? 'checked' : 'unchecked');
        });

        const span = document.createElement('span');
        span.className = 'slot-box';
        span.textContent = i + 1;

        label.appendChild(input);
        label.appendChild(span);
        container.appendChild(label);
    }
}

// Обновить скрытую атаку
function updateSneakAttack() {
    const dice = getSneakAttackDice(character.level);
    document.getElementById('sneak-level').textContent = `${character.level} ур`;
    document.getElementById('sneak-calc').innerHTML =
        `<strong>Урон:</strong> +${dice}к6 (увеличивается с уровнем)`;
}

// Броски
function rollAttack(weaponName, abilityKey) {
    const prof = getProficiencyBonus(character.level);
    const mod = getMod(abilityKey);
    const bonus = mod + prof;

    const roll = rollDice(20);
    const total = roll + bonus;
    const crit = roll === 20 ? ' 🎯 КРИТ!' : roll === 1 ? ' ❌ ПРОВАЛ!' : '';
    showRollResult(`${weaponName} (попадание)`, total, `1к20(${roll}) + ${bonus}${crit}`);
}

function rollDamage(weaponName, dice, sides, abilityKey, damageType) {
    const mod = getMod(abilityKey);
    const rolls = rollMultipleDice(dice, sides);
    const sum = rolls.reduce((a, b) => a + b, 0);
    const total = sum + mod;
    const modStr = mod !== 0 ? ` + ${mod}` : '';
    const typeStr = damageType ? ` ${damageType}` : '';
    showRollResult(`${weaponName} (урон)`, total, `${dice}к${sides}(${rolls.join(', ')})${modStr}${typeStr}`);
}

function rollSneakAttack() {
    const dice = getSneakAttackDice(character.level);
    const rolls = rollMultipleDice(dice, 6);
    const total = rolls.reduce((a, b) => a + b, 0);
    showRollResult('Скрытая атака', total, `${dice}к6(${rolls.join(', ')}) доп. урон`);
}

function rollSpell(spellName, dice, sides) {
    const rolls = rollMultipleDice(dice, sides);
    const total = rolls.reduce((a, b) => a + b, 0);
    showRollResult(spellName, total, `${dice}к${sides}(${rolls.join(', ')})`);
}

// Показать результат броска
function showRollResult(title, total, detail = '') {
    const resultsContainer = document.getElementById('roll-results');
    const resultElement = document.createElement('div');
    resultElement.className = 'roll-result';
    resultElement.innerHTML = `
        <div class="roll-result-title">${title}</div>
        <div class="roll-result-value">${total}</div>
        ${detail ? `<div class="roll-result-detail">${detail}</div>` : ''}
    `;
    resultsContainer.appendChild(resultElement);

    setTimeout(() => {
        resultElement.style.opacity = '0';
        resultElement.style.transform = 'translateY(-20px)';
        resultElement.style.transition = 'all 0.3s ease';
        setTimeout(() => resultElement.remove(), 300);
    }, 4000);
}

// HP Modal
function openHPModal() {
    const currentHP = parseInt(localStorage.getItem(`${activeCharacterId}-hp`)) || character.hpMax;
    const tempHP = parseInt(localStorage.getItem(`${activeCharacterId}-temp-hp`)) || 0;
    const hitDice = parseInt(localStorage.getItem(`${activeCharacterId}-hit-dice`)) || character.level;

    document.getElementById('hp-modal-current').textContent = currentHP;
    document.getElementById('hp-modal-max').textContent = character.hpMax;
    document.getElementById('hp-temp').value = tempHP;
    document.getElementById('hit-dice-count').textContent = hitDice;

    document.getElementById('hp-modal').classList.add('active');
}

function closeHPModal() {
    // Сохраняем временные HP при закрытии
    const tempHP = parseInt(document.getElementById('hp-temp').value) || 0;
    localStorage.setItem(`${activeCharacterId}-temp-hp`, tempHP);

    document.getElementById('hp-modal').classList.remove('active');
}

function healHP() {
    const amount = prompt('Сколько хитов восстановить?');
    if (amount === null) return;

    const heal = parseInt(amount);
    if (isNaN(heal) || heal <= 0) return;

    const currentHP = parseInt(localStorage.getItem(`${activeCharacterId}-hp`)) || character.hpMax;
    const newHP = Math.min(currentHP + heal, character.hpMax);

    localStorage.setItem(`${activeCharacterId}-hp`, newHP);
    document.getElementById('hp-current-display').textContent = newHP;
    document.getElementById('hp-modal-current').textContent = newHP;

    showRollResult('💚 Лечение', `+${heal} хитов`, `Текущие: ${newHP}/${character.hpMax}`);
}

function damageHP() {
    const amount = prompt('Сколько урона?');
    if (amount === null) return;

    const damage = parseInt(amount);
    if (isNaN(damage) || damage <= 0) return;

    const currentHP = parseInt(localStorage.getItem(`${activeCharacterId}-hp`)) || character.hpMax;
    const tempHP = parseInt(localStorage.getItem(`${activeCharacterId}-temp-hp`)) || 0;

    let remainingDamage = damage;
    let newTempHP = tempHP;

    // Сначала отнимаем от временных
    if (tempHP > 0) {
        if (tempHP >= remainingDamage) {
            newTempHP = tempHP - remainingDamage;
            remainingDamage = 0;
        } else {
            newTempHP = 0;
            remainingDamage -= tempHP;
        }
        localStorage.setItem(`${activeCharacterId}-temp-hp`, newTempHP);
        document.getElementById('hp-temp').value = newTempHP;
    }

    // Затем от обычных
    const newHP = Math.max(0, currentHP - remainingDamage);

    localStorage.setItem(`${activeCharacterId}-hp`, newHP);
    document.getElementById('hp-current-display').textContent = newHP;
    document.getElementById('hp-modal-current').textContent = newHP;

    showRollResult('💔 Урон', `-${damage}`, `Текущие: ${newHP}/${character.hpMax}`);
}

function changeHitDice(delta) {
    const current = parseInt(document.getElementById('hit-dice-count').textContent);
    const newValue = Math.max(0, Math.min(character.level, current + delta));

    document.getElementById('hit-dice-count').textContent = newValue;
    localStorage.setItem(`${activeCharacterId}-hit-dice`, newValue);
}

// Level Up
function levelUp() {
    const confirmMsg = appSettings.language === 'en'
        ? `Level up to ${character.level + 1}?`
        : `Повысить уровень до ${character.level + 1}?`;

    if (!confirm(confirmMsg)) return;

    character.level += 1;

    // Пересчитываем хиты
    const conMod = calculateModifier(character.con);
    const calculatedHP = 8 + conMod + (character.level - 1) * (5 + conMod);

    const hpMsg = appSettings.language === 'en'
        ? `Recalculate HP to ${calculatedHP}? (or keep current ${character.hpMax})`
        : `Пересчитать хиты в ${calculatedHP}? (или оставить текущие ${character.hpMax})`;

    if (confirm(hpMsg)) {
        character.hpMax = calculatedHP;
        const currentHP = parseInt(localStorage.getItem(`${activeCharacterId}-hp`)) || character.hpMax;
        localStorage.setItem(`${activeCharacterId}-hp`, calculatedHP);
        document.getElementById('hp-current-display').textContent = calculatedHP;
    }

    // Обновляем персонажа в массиве
    const index = characters.findIndex(c => c.id === activeCharacterId);
    if (index !== -1) {
        characters[index] = { ...character };
    }

    saveCharacters();
    updateAllCalculations();

    showRollResult('🎉', `Уровень ${character.level}!`, 'Поздравляем!');
}

// Stats Modal
function openStatsModal() {
    document.getElementById('str-input').value = character.str;
    document.getElementById('dex-input').value = character.dex;
    document.getElementById('con-input').value = character.con;
    document.getElementById('int-input').value = character.int;
    document.getElementById('wis-input').value = character.wis;
    document.getElementById('cha-input').value = character.cha;
    document.getElementById('ac-input').value = character.ac;
    document.getElementById('hp-max-input').value = character.hpMax;
    document.getElementById('stats-modal').classList.add('active');
}

function closeStatsModal() {
    document.getElementById('stats-modal').classList.remove('active');
}

function saveCharacterStats() {
    const newStr = parseInt(document.getElementById('str-input').value);
    const newDex = parseInt(document.getElementById('dex-input').value);
    const newCon = parseInt(document.getElementById('con-input').value);
    const newInt = parseInt(document.getElementById('int-input').value);
    const newWis = parseInt(document.getElementById('wis-input').value);
    const newCha = parseInt(document.getElementById('cha-input').value);
    const newAC = parseInt(document.getElementById('ac-input').value);
    const newHPMax = parseInt(document.getElementById('hp-max-input').value);

    // Применяем изменения
    character.str = newStr;
    character.dex = newDex;
    character.con = newCon;
    character.int = newInt;
    character.wis = newWis;
    character.cha = newCha;
    character.ac = newAC;
    character.hpMax = newHPMax;

    // Обновляем персонажа в массиве
    const index = characters.findIndex(c => c.id === activeCharacterId);
    if (index !== -1) {
        characters[index] = { ...character };
    }

    saveCharacters();
    updateAllCalculations();
    closeStatsModal();

    showRollResult('✓', 'Персонаж успешно обновлён', '');
}

// Инвентарь
function renderInventory() {
    const container = document.getElementById('inventory-container');
    const inventoryKey = `${activeCharacterId}-inventory`;
    const inventory = JSON.parse(localStorage.getItem(inventoryKey)) || defaultInventory;

    container.innerHTML = '';

    const categories = {
        weapon: 'Оружие',
        armor: 'Броня',
        tool: 'Инструменты',
        consumable: 'Расходники',
        ingredient: 'Ингредиенты',
        misc: 'Разное'
    };

    Object.keys(categories).forEach(type => {
        if (!inventory[type] || inventory[type].length === 0) return;

        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `
            <span class="item-category category-${type}">${categories[type]}</span>
            <span class="category-count">${inventory[type].length}</span>
        `;
        container.appendChild(header);

        inventory[type].forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'inventory-item';
            div.setAttribute('data-category', type);
            div.classList.add(`category-${type}`);
            if (item.equipped) div.classList.add('equipped');
            if (item.learnable) div.classList.add('learnable');

            let content = `<div class="item-main-row">
                <span class="item-name">${item.name}`;
            if (item.equipped) content += ` <span class="equipped-badge">●</span>`;
            if (item.learnable) content += ` <span class="learnable-badge">📚</span>`;
            content += `</span>`;

            // Если есть количество больше 1, показываем кнопки +/-
            if (item.count > 1) {
                content += `<div class="item-controls">
                    <button class="item-control-btn" onclick="changeItemCount('${type}', ${index}, -1)">−</button>
                    <span class="item-count">${item.count}</span>
                    <button class="item-control-btn" onclick="changeItemCount('${type}', ${index}, 1)">+</button>
                </div>`;
            } else if (item.detail) {
                content += `<span class="item-detail">${item.detail}</span>`;
            }

            content += `<button class="item-edit" onclick="editItem('${type}', ${index})">✎</button>
            <button class="item-delete" onclick="deleteItem('${type}', ${index})">×</button>
            </div>`;

            // Если предмет изучаемый - показываем прогресс-бар
            if (item.learnable) {
                const progress = (item.progress / item.target * 100).toFixed(0);
                const progressText = appSettings.language === 'en'
                    ? `Progress: ${item.progress}/${item.target}`
                    : `Прогресс: ${item.progress}/${item.target}`;

                content += `<div class="learn-progress">
                    <div class="learn-bar">
                        <div class="learn-bar-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="learn-text">${progressText} (${item.dice} + ${item.ability.toUpperCase()})</span>
                </div>`;
            }

            div.innerHTML = content;
            container.appendChild(div);
        });
    });
}

// === ДЕНЬГИ ===
function renderMoney() {
    const moneyKey = `${activeCharacterId}-money`;
    const money = JSON.parse(localStorage.getItem(moneyKey)) || character.money || { gold: 0, silver: 0, copper: 0 };

    document.getElementById('money-gold').textContent = money.gold || 0;
    document.getElementById('money-silver').textContent = money.silver || 0;
    document.getElementById('money-copper').textContent = money.copper || 0;
}

window.editMoney = function(type) {
    const moneyKey = `${activeCharacterId}-money`;
    const money = JSON.parse(localStorage.getItem(moneyKey)) || character.money || { gold: 0, silver: 0, copper: 0 };

    const labels = {
        gold: 'золота (зм)',
        silver: 'серебра (см)',
        copper: 'меди (мм)'
    };

    const currentValue = money[type] || 0;
    const newValue = prompt(`Введите количество ${labels[type]}:`, currentValue);

    if (newValue === null) return; // Отмена

    const parsedValue = parseInt(newValue);
    if (isNaN(parsedValue) || parsedValue < 0) {
        alert('Введите корректное число (0 или больше)');
        return;
    }

    money[type] = parsedValue;
    localStorage.setItem(moneyKey, JSON.stringify(money));
    renderMoney();
};

let moneyModalMode = 'add'; // 'add' или 'subtract'

window.openMoneyModal = function(mode = 'add') {
    moneyModalMode = mode;

    const moneyKey = `${activeCharacterId}-money`;
    const money = JSON.parse(localStorage.getItem(moneyKey)) || character.money || { gold: 0, silver: 0, copper: 0 };

    // Меняем заголовок в зависимости от режима
    document.getElementById('money-modal-title').textContent = mode === 'add' ? 'Добавить' : 'Потратить';

    // Меняем текст кнопок в зависимости от режима
    const buttonText = mode === 'add' ? '+' : '−';
    document.getElementById('btn-gold').textContent = buttonText;
    document.getElementById('btn-silver').textContent = buttonText;
    document.getElementById('btn-copper').textContent = buttonText;

    // Отображаем текущие значения
    document.getElementById('modal-gold-current').textContent = money.gold || 0;
    document.getElementById('modal-silver-current').textContent = money.silver || 0;
    document.getElementById('modal-copper-current').textContent = money.copper || 0;

    // Очищаем поля ввода
    document.getElementById('modal-gold-input').value = '';
    document.getElementById('modal-silver-input').value = '';
    document.getElementById('modal-copper-input').value = '';

    document.getElementById('money-modal').classList.add('active');
};

window.closeMoneyModal = function() {
    document.getElementById('money-modal').classList.remove('active');
};

window.adjustMoneyModal = function(type, delta) {
    const input = document.getElementById(`modal-${type}-input`);
    const currentValue = parseInt(input.value) || 0;
    input.value = Math.max(0, currentValue + delta);
};

window.saveMoneyModal = function() {
    const moneyKey = `${activeCharacterId}-money`;
    const money = JSON.parse(localStorage.getItem(moneyKey)) || character.money || { gold: 0, silver: 0, copper: 0 };

    // Получаем значения из полей ввода
    const goldChange = parseInt(document.getElementById('modal-gold-input').value) || 0;
    const silverChange = parseInt(document.getElementById('modal-silver-input').value) || 0;
    const copperChange = parseInt(document.getElementById('modal-copper-input').value) || 0;

    if (moneyModalMode === 'add') {
        // Режим добавления
        let copper = Math.max(0, (money.copper || 0) + copperChange);
        let silver = Math.max(0, (money.silver || 0) + silverChange);
        let gold = Math.max(0, (money.gold || 0) + goldChange);

        // Конвертация: 10 медных = 1 серебро
        if (copper >= 10) {
            const copperToSilver = Math.floor(copper / 10);
            silver += copperToSilver;
            copper = copper % 10;
        }

        // Конвертация: 10 серебра = 1 золото
        if (silver >= 10) {
            const silverToGold = Math.floor(silver / 10);
            gold += silverToGold;
            silver = silver % 10;
        }

        money.gold = gold;
        money.silver = silver;
        money.copper = copper;
    } else {
        // Режим вычитания с автоматической конвертацией
        // Переводим всё в медь
        let totalCopper = (money.gold || 0) * 100 + (money.silver || 0) * 10 + (money.copper || 0);
        const spendCopper = goldChange * 100 + silverChange * 10 + copperChange;

        // Проверяем, достаточно ли денег
        if (totalCopper < spendCopper) {
            alert('Недостаточно денег!');
            return;
        }

        // Вычитаем
        totalCopper -= spendCopper;

        // Конвертируем обратно
        money.gold = Math.floor(totalCopper / 100);
        totalCopper = totalCopper % 100;
        money.silver = Math.floor(totalCopper / 10);
        money.copper = totalCopper % 10;
    }

    localStorage.setItem(moneyKey, JSON.stringify(money));
    renderMoney();
    closeMoneyModal();
};

// Переменная для отслеживания режима редактирования
let editingItem = null;

function toggleAddItemForm() {
    const form = document.getElementById('add-item-form');
    const isVisible = form.style.display !== 'none';

    if (isVisible) {
        form.style.display = 'none';
        editingItem = null;
        document.getElementById('item-name-input').value = '';
        document.getElementById('item-detail-input').value = '';
        document.getElementById('item-count-input').value = '1';
        document.getElementById('item-equipped-input').checked = false;
        document.getElementById('item-learnable-input').checked = false;
        document.getElementById('learnable-fields').style.display = 'none';
    } else {
        form.style.display = 'block';
        document.getElementById('item-name-input').focus();
    }
}

function toggleLearnableFields() {
    const isChecked = document.getElementById('item-learnable-input').checked;
    document.getElementById('learnable-fields').style.display = isChecked ? 'block' : 'none';
}

function editItem(type, index) {
    const inventoryKey = `${activeCharacterId}-inventory`;
    const inventory = JSON.parse(localStorage.getItem(inventoryKey)) || defaultInventory;
    const item = inventory[type][index];

    if (!item) return;

    // Сохраняем информацию о редактируемом предмете
    editingItem = { type, index };

    // Заполняем форму
    document.getElementById('item-name-input').value = item.name;
    document.getElementById('item-type-input').value = type;
    document.getElementById('item-detail-input').value = item.detail || '';
    document.getElementById('item-count-input').value = item.count || 1;
    document.getElementById('item-equipped-input').checked = item.equipped || false;
    document.getElementById('item-learnable-input').checked = item.learnable || false;

    if (item.learnable) {
        document.getElementById('learnable-fields').style.display = 'block';
        document.getElementById('item-target-input').value = item.target || 50;
        document.getElementById('item-dice-input').value = item.dice || '1d4';
        document.getElementById('item-ability-input').value = item.ability || 'int';
    }

    // Открываем форму
    document.getElementById('add-item-form').style.display = 'block';
    document.getElementById('item-name-input').focus();
}

function addInventoryItem() {
    const name = document.getElementById('item-name-input').value.trim();
    const type = document.getElementById('item-type-input').value;
    const detail = document.getElementById('item-detail-input').value.trim();
    const count = parseInt(document.getElementById('item-count-input').value) || 1;
    const equipped = document.getElementById('item-equipped-input').checked;
    const learnable = document.getElementById('item-learnable-input').checked;

    if (!name) {
        const msg = 'Введите название предмета';
        alert(msg);
        return;
    }

    const inventoryKey = `${activeCharacterId}-inventory`;
    const inventory = JSON.parse(localStorage.getItem(inventoryKey)) || defaultInventory;
    if (!inventory[type]) inventory[type] = [];

    const item = { name, detail, count, equipped };

    // Если можно изучать - добавляем параметры
    if (learnable) {
        item.learnable = true;
        item.target = parseInt(document.getElementById('item-target-input').value) || 50;
        item.dice = document.getElementById('item-dice-input').value;
        item.ability = document.getElementById('item-ability-input').value;

        // Если редактируем - сохраняем прогресс
        if (editingItem && editingItem.type === type) {
            const oldItem = inventory[editingItem.type][editingItem.index];
            item.progress = oldItem.progress || 0;
        } else {
            item.progress = 0;
        }
    }

    // Если редактируем - заменяем, иначе добавляем
    if (editingItem) {
        // Удаляем старый предмет
        inventory[editingItem.type].splice(editingItem.index, 1);
        // Добавляем обновлённый в новую категорию
        inventory[type].push(item);
    } else {
        inventory[type].push(item);
    }

    localStorage.setItem(inventoryKey, JSON.stringify(inventory));

    renderInventory();
    toggleAddItemForm();
}

function changeItemCount(type, index, delta) {
    const inventoryKey = `${activeCharacterId}-inventory`;
    const inventory = JSON.parse(localStorage.getItem(inventoryKey)) || defaultInventory;

    if (!inventory[type][index]) return;

    const newCount = inventory[type][index].count + delta;

    // Если количество становится 0, удаляем предмет
    if (newCount <= 0) {
        const confirmMsg = appSettings.language === 'en'
            ? 'Remove this item completely?'
            : 'Удалить предмет полностью?';

        if (confirm(confirmMsg)) {
            inventory[type].splice(index, 1);
        } else {
            return;
        }
    } else {
        inventory[type][index].count = newCount;
    }

    localStorage.setItem(inventoryKey, JSON.stringify(inventory));
    renderInventory();
}

function deleteItem(type, index) {
    const confirmMsg = appSettings.language === 'en'
        ? 'Delete this item?'
        : 'Удалить предмет?';

    if (!confirm(confirmMsg)) return;

    const inventoryKey = `${activeCharacterId}-inventory`;
    const inventory = JSON.parse(localStorage.getItem(inventoryKey)) || defaultInventory;
    inventory[type].splice(index, 1);
    localStorage.setItem(inventoryKey, JSON.stringify(inventory));
    renderInventory();
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎲 Интерактивный лист персонажа загружен!');

    // Принудительно закрываем все модальные окна при загрузке
    const modals = document.querySelectorAll('.modal');
    console.log('📦 Найдено модальных окон:', modals.length);
    modals.forEach(modal => {
        modal.classList.remove('active');
        console.log('  - Модальное окно закрыто:', modal.id);
    });

    // Загружаем настройки приложения
    loadAppSettings();

    // Загружаем персонажей
    loadCharacters();

    // Устанавливаем имя персонажа
    const nameDisplay = document.getElementById('character-name-display');
    if (nameDisplay) {
        nameDisplay.textContent = character.name;
    }

    // Загружаем хиты текущего персонажа
    const savedHP = localStorage.getItem(`${activeCharacterId}-hp`);
    const currentHP = savedHP ? parseInt(savedHP) : character.hpMax;
    const hpDisplay = document.getElementById('hp-current-display');
    if (hpDisplay) {
        hpDisplay.textContent = currentHP;
    }

    // Обновляем все расчеты
    updateAllCalculations();

    // Рендерим инвентарь и обучение
    renderInventory();
    renderMoney();
    renderTraining();

    // Загружаем вдохновение, истощение и состояния
    loadInspiration();
    updateExhaustionDisplay();
    loadConditions();

    // Рендерим события
    renderEvents();

    // Переключение вкладок
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    console.log('📑 Найдено вкладок:', tabs.length);
    console.log('📄 Найдено секций контента:', tabContents.length);

    tabs.forEach((tab, index) => {
        console.log(`  - Вкладка ${index + 1}: ${tab.getAttribute('data-tab')}`);
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            console.log('✅ Клик на вкладку:', targetTab);
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            localStorage.setItem('activeTab', targetTab);
        });
    });

    // Восстанавливаем вкладку
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        document.querySelector(`[data-tab="${savedTab}"]`)?.click();
    }

    // Слоты заклинаний
    document.querySelectorAll('.spell-slot-check').forEach((slot, index) => {
        const savedState = localStorage.getItem(`spell-slot-${index}`);
        if (savedState === 'checked') slot.checked = true;

        slot.addEventListener('change', () => {
            localStorage.setItem(`spell-slot-${index}`, slot.checked ? 'checked' : 'unchecked');
        });
    });

    // Глобальное отслеживание кликов для диагностики
    document.addEventListener('click', (e) => {
        console.log('🖱️ Клик:', {
            тег: e.target.tagName,
            класс: e.target.className,
            текст: e.target.textContent?.substring(0, 30),
            id: e.target.id
        });
    }, true);

    console.log('✅ Инициализация завершена успешно!');
});

// Управление персонажами
function loadCharacters() {
    const saved = localStorage.getItem('characters');
    if (saved) {
        characters = JSON.parse(saved);
    } else {
        characters = [defaultCharacter];
    }

    activeCharacterId = localStorage.getItem('activeCharacterId') || characters[0].id;
    character = getActiveCharacter();
}

function saveCharacters() {
    localStorage.setItem('characters', JSON.stringify(characters));
    localStorage.setItem('activeCharacterId', activeCharacterId);
}

function switchCharacter(charId) {
    activeCharacterId = charId;
    character = getActiveCharacter();
    saveCharacters();

    // Обновляем все
    document.getElementById('character-name-display').textContent = character.name;
    updateAllCalculations();
    renderInventory();
    renderMoney();

    // Загружаем хиты персонажа
    const savedHP = localStorage.getItem(`${charId}-hp`);
    const currentHP = savedHP ? parseInt(savedHP) : character.hpMax;
    document.getElementById('hp-current-display').textContent = currentHP;

    closeCharacterList();
}

function deleteCharacter(charId) {
    if (characters.length === 1) {
        alert('Нельзя удалить единственного персонажа');
        return;
    }

    if (!confirm('Удалить персонажа?')) return;

    characters = characters.filter(c => c.id !== charId);

    if (activeCharacterId === charId) {
        switchCharacter(characters[0].id);
    }

    saveCharacters();
    renderCharacterList();
}

// Модальное окно списка персонажей
function openCharacterList() {
    renderCharacterList();
    document.getElementById('character-list-modal').classList.add('active');
}

function closeCharacterList() {
    document.getElementById('character-list-modal').classList.remove('active');
}

function renderCharacterList() {
    const container = document.getElementById('characters-list');
    container.innerHTML = '';

    characters.forEach(char => {
        const div = document.createElement('div');
        div.className = 'character-card';
        if (char.id === activeCharacterId) div.classList.add('active');

        div.innerHTML = `
            <div class="character-info">
                <h4>${char.name}</h4>
                <p>${getRaceName(char.race)} ${getClassName(char.class)} ${char.level} ур.</p>
            </div>
            <button class="character-delete" onclick="event.stopPropagation(); deleteCharacter('${char.id}')">×</button>
        `;

        div.onclick = () => switchCharacter(char.id);
        container.appendChild(div);
    });
}

function getRaceName(race) {
    const races = {
        tabaxi: 'Табакси',
        human: 'Человек',
        elf: 'Эльф',
        dwarf: 'Дварф',
        halfling: 'Полурослик',
        dragonborn: 'Драконорождённый',
        tiefling: 'Тифлинг'
    };
    return races[race] || race;
}

function getClassName(cls) {
    const classes = {
        rogue: 'Разбойник',
        fighter: 'Воин',
        wizard: 'Волшебник',
        cleric: 'Жрец',
        ranger: 'Следопыт',
        paladin: 'Паладин',
        bard: 'Бард'
    };
    return classes[cls] || cls;
}

// Конструктор персонажа
function openCharacterCreator() {
    closeCharacterList();
    // Сброс формы
    document.getElementById('new-char-name').value = '';
    document.getElementById('new-char-race').value = 'tabaxi';
    document.getElementById('new-char-class').value = 'rogue';
    document.getElementById('new-char-level').value = '1';
    document.getElementById('new-str').value = '10';
    document.getElementById('new-dex').value = '10';
    document.getElementById('new-con').value = '10';
    document.getElementById('new-int').value = '10';
    document.getElementById('new-wis').value = '10';
    document.getElementById('new-cha').value = '10';
    document.getElementById('new-ac').value = '10';
    document.getElementById('new-hp-max').value = '10';

    goToCreatorStep(1);
    document.getElementById('character-creator-modal').classList.add('active');
}

function closeCharacterCreator() {
    document.getElementById('character-creator-modal').classList.remove('active');
}

function goToCreatorStep(step) {
    document.querySelectorAll('.creator-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`creator-step-${step}`).classList.add('active');
}

function createNewCharacter() {
    const name = document.getElementById('new-char-name').value.trim();
    if (!name) {
        alert('Введите имя персонажа');
        return;
    }

    const newChar = {
        id: `char-${Date.now()}`,
        name: name,
        race: document.getElementById('new-char-race').value,
        class: document.getElementById('new-char-class').value,
        level: parseInt(document.getElementById('new-char-level').value),
        str: parseInt(document.getElementById('new-str').value),
        dex: parseInt(document.getElementById('new-dex').value),
        con: parseInt(document.getElementById('new-con').value),
        int: parseInt(document.getElementById('new-int').value),
        wis: parseInt(document.getElementById('new-wis').value),
        cha: parseInt(document.getElementById('new-cha').value),
        ac: parseInt(document.getElementById('new-ac').value),
        hpMax: parseInt(document.getElementById('new-hp-max').value),
        money: { gold: 0, silver: 0, copper: 0 }
    };

    characters.push(newChar);
    saveCharacters();
    switchCharacter(newChar.id);
    closeCharacterCreator();
}

// Управление настройками приложения
function loadAppSettings() {
    const saved = localStorage.getItem('appSettings');
    if (saved) {
        appSettings = JSON.parse(saved);
    }
    applyAppSettings();
}

function saveAppSettings() {
    localStorage.setItem('appSettings', JSON.stringify(appSettings));
}

function applyAppSettings() {
    // Применяем онлайн режим
    if (appSettings.onlineMode) {
        document.body.classList.add('online-mode');
    } else {
        document.body.classList.remove('online-mode');
    }
    const onlineBtn = document.getElementById('online-btn');
    if (onlineBtn) {
        onlineBtn.classList.toggle('active', appSettings.onlineMode);
    }

    // Применяем тему
    if (appSettings.darkTheme) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.textContent = appSettings.darkTheme ? '☀️' : '🌙';
        themeBtn.classList.toggle('active', appSettings.darkTheme);
    }
}

function toggleOnlineMode() {
    appSettings.onlineMode = !appSettings.onlineMode;
    saveAppSettings();
    applyAppSettings();
}

function toggleTheme() {
    appSettings.darkTheme = !appSettings.darkTheme;
    saveAppSettings();
    applyAppSettings();
}

// === ВДОХНОВЕНИЕ ===
function toggleInspirationPlayer(event) {
    event.stopPropagation();
    const btn = document.getElementById('inspiration-player');
    const isActive = btn.classList.contains('active');
    btn.classList.toggle('active');
    localStorage.setItem(`${activeCharacterId}-inspiration-player`, !isActive);
    console.log('Вдохновение игрока:', !isActive);
}

function toggleInspirationDM(event) {
    event.stopPropagation();
    const btn = document.getElementById('inspiration-dm');
    const isActive = btn.classList.contains('active');
    btn.classList.toggle('active');
    localStorage.setItem(`${activeCharacterId}-inspiration-dm`, !isActive);
    console.log('Вдохновение мастера:', !isActive);
}

function loadInspiration() {
    const playerInsp = localStorage.getItem(`${activeCharacterId}-inspiration-player`) === 'true';
    const dmInsp = localStorage.getItem(`${activeCharacterId}-inspiration-dm`) === 'true';

    if (playerInsp) document.getElementById('inspiration-player')?.classList.add('active');
    if (dmInsp) document.getElementById('inspiration-dm')?.classList.add('active');
}

// === ИСТОЩЕНИЕ ===
function openExhaustionModal() {
    document.getElementById('exhaustion-modal').classList.add('active');
    updateExhaustionVisual();
}

function closeExhaustionModal() {
    document.getElementById('exhaustion-modal').classList.remove('active');
}

function changeExhaustion(delta) {
    const current = parseInt(localStorage.getItem(`${activeCharacterId}-exhaustion`) || '0');
    const newValue = Math.max(0, Math.min(6, current + delta));
    localStorage.setItem(`${activeCharacterId}-exhaustion`, newValue);
    updateExhaustionDisplay();
    updateExhaustionVisual();
}

function updateExhaustionDisplay() {
    const value = parseInt(localStorage.getItem(`${activeCharacterId}-exhaustion`) || '0');
    document.getElementById('exhaustion-display').textContent = value;
    const levelEl = document.getElementById('exhaustion-level');
    if (levelEl) levelEl.textContent = value;
}

function updateExhaustionVisual() {
    const level = parseInt(localStorage.getItem(`${activeCharacterId}-exhaustion`) || '0');
    document.querySelectorAll('.exhaustion-item').forEach((item, index) => {
        if (index < level) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// === МОДАЛЬНОЕ ОКНО ОБУЧЕНИЯ ===
function openTrainingModal() {
    renderTrainingModal();
    document.getElementById('training-modal').classList.add('active');
}

function closeTrainingModal() {
    document.getElementById('training-modal').classList.remove('active');
}

function renderTrainingModal() {
    const container = document.getElementById('training-modal-container');
    const inventoryKey = `${activeCharacterId}-inventory`;
    const inventory = JSON.parse(localStorage.getItem(inventoryKey)) || defaultInventory;

    container.innerHTML = '';

    let hasLearnableItems = false;

    // Собираем все изучаемые предметы
    Object.keys(inventory).forEach(type => {
        inventory[type].forEach((item, index) => {
            if (item.learnable) {
                hasLearnableItems = true;
                const div = document.createElement('div');
                div.className = 'training-card';

                const progress = Math.min(100, (item.progress / item.target * 100));
                const isMastered = item.progress >= item.target;

                let statusText = '';
                let statusClass = '';
                if (isMastered) {
                    statusText = 'Освоено!';
                    statusClass = 'status-mastered';
                } else if (item.progress === 0) {
                    statusText = 'Не начато';
                    statusClass = 'status-not-started';
                } else {
                    statusText = `Прогресс: ${item.progress}/${item.target}`;
                    statusClass = 'status-in-progress';
                }

                div.innerHTML = `
                    <div class="training-header">
                        <h4>${item.name}</h4>
                        <span class="training-status ${statusClass}">${statusText}</span>
                    </div>
                    <div class="training-progress">
                        <div class="training-bar">
                            <div class="training-bar-fill" style="width: ${progress}%"></div>
                        </div>
                        <div class="training-info">
                            <span>${item.dice} + ${item.ability.toUpperCase()}</span>
                            <span>${Math.floor(progress)}%</span>
                        </div>
                    </div>
                    ${!isMastered ? `<button class="btn-train" onclick="trainItem('${type}', ${index}); renderTrainingModal()">Тренировать</button>` : ''}
                `;

                container.appendChild(div);
            }
        });
    });

    if (!hasLearnableItems) {
        container.innerHTML = `<div class="empty-state">
            <p>Нет изучаемых предметов.</p>
        </div>`;
    }
}

// === ТРЕКЕР СОБЫТИЙ ===
function toggleEventForm() {
    const form = document.getElementById('event-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function addEvent() {
    const name = document.getElementById('event-name').value.trim();
    const location = document.getElementById('event-location').value.trim();
    const days = parseInt(document.getElementById('event-days').value);

    if (!name || isNaN(days) || days < 0) {
        showRollResult('Ошибка', 'Заполните название и количество дней', '');
        return;
    }

    const events = getEvents();
    const newEvent = {
        id: Date.now(),
        name: name,
        location: location,
        daysLeft: days,
        createdAt: new Date().toISOString()
    };

    events.push(newEvent);
    localStorage.setItem(`${activeCharacterId}-events`, JSON.stringify(events));

    // Очищаем форму
    document.getElementById('event-name').value = '';
    document.getElementById('event-location').value = '';
    document.getElementById('event-days').value = '';
    toggleEventForm();

    renderEvents();
    showRollResult('Событие добавлено', name, location || `Через ${days} дней`);
}

function getEvents() {
    const saved = localStorage.getItem(`${activeCharacterId}-events`);
    return saved ? JSON.parse(saved) : [];
}

function renderEvents() {
    const container = document.getElementById('events-container');
    const events = getEvents();

    if (events.length === 0) {
        container.innerHTML = `<div class="empty-state">
            <p>Нет событий. Нажмите "+ Событие" чтобы добавить.</p>
        </div>`;
        return;
    }

    // Сортируем по количеству дней
    events.sort((a, b) => a.daysLeft - b.daysLeft);

    container.innerHTML = events.map(event => {
        let statusClass = '';
        let statusText = '';

        if (event.daysLeft === 0) {
            statusClass = 'event-today';
            statusText = 'Сегодня!';
        } else if (event.daysLeft <= 3) {
            statusClass = 'event-soon';
            statusText = `Через ${event.daysLeft} дн.`;
        } else {
            statusClass = 'event-future';
            statusText = `Через ${event.daysLeft} дн.`;
        }

        return `
            <div class="event-card ${statusClass}">
                <div class="event-header">
                    <div class="event-info">
                        <h4 class="event-name">${event.name}</h4>
                        ${event.location ? `<span class="event-location">📍 ${event.location}</span>` : ''}
                    </div>
                    <div class="event-controls">
                        <span class="event-countdown">${statusText}</span>
                        <button class="event-btn" onclick="advanceEventDay(${event.id}, -1)" title="Вычесть день">−</button>
                        <button class="event-btn" onclick="advanceEventDay(${event.id}, 1)" title="Добавить день">+</button>
                        <button class="event-btn delete" onclick="deleteEvent(${event.id})" title="Удалить">×</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function advanceEventDay(eventId, delta) {
    const events = getEvents();
    const event = events.find(e => e.id === eventId);

    if (event) {
        event.daysLeft = Math.max(0, event.daysLeft + delta);
        localStorage.setItem(`${activeCharacterId}-events`, JSON.stringify(events));
        renderEvents();
    }
}

function deleteEvent(eventId) {
    if (!confirm('Удалить это событие?')) return;

    const events = getEvents();
    const filtered = events.filter(e => e.id !== eventId);
    localStorage.setItem(`${activeCharacterId}-events`, JSON.stringify(filtered));
    renderEvents();
}

// === СОСТОЯНИЯ ===
function openConditionsModal() {
    document.getElementById('conditions-modal').classList.add('active');
    loadConditions();
}

function closeConditionsModal() {
    document.getElementById('conditions-modal').classList.remove('active');
}

function updateConditions() {
    const conditions = [];
    document.querySelectorAll('.condition-check:checked').forEach(checkbox => {
        conditions.push(checkbox.dataset.condition);
    });

    localStorage.setItem(`${activeCharacterId}-conditions`, JSON.stringify(conditions));
    document.getElementById('conditions-count').textContent = conditions.length;
}

function loadConditions() {
    const saved = localStorage.getItem(`${activeCharacterId}-conditions`);
    const conditions = saved ? JSON.parse(saved) : [];

    document.querySelectorAll('.condition-check').forEach(checkbox => {
        checkbox.checked = conditions.includes(checkbox.dataset.condition);
    });

    document.getElementById('conditions-count').textContent = conditions.length;
}

// Экспорт функций
window.openHPModal = openHPModal;
window.closeHPModal = closeHPModal;
window.healHP = healHP;
window.damageHP = damageHP;
window.changeHitDice = changeHitDice;
window.levelUp = levelUp;
window.openStatsModal = openStatsModal;
window.closeStatsModal = closeStatsModal;
window.saveCharacterStats = saveCharacterStats;
window.toggleOnlineMode = toggleOnlineMode;
window.toggleTheme = toggleTheme;
window.rollAttack = rollAttack;
window.rollDamage = rollDamage;
window.rollSneakAttack = rollSneakAttack;
window.rollSpell = rollSpell;
window.toggleAddItemForm = toggleAddItemForm;
window.toggleLearnableFields = toggleLearnableFields;
window.addInventoryItem = addInventoryItem;
window.editItem = editItem;
window.deleteItem = deleteItem;
window.changeItemCount = changeItemCount;
window.trainItem = trainItem;
window.trainAll = trainAll;
window.saveProgress = saveProgress;
window.openCharacterList = openCharacterList;
window.closeCharacterList = closeCharacterList;
window.deleteCharacter = deleteCharacter;
window.openCharacterCreator = openCharacterCreator;
window.closeCharacterCreator = closeCharacterCreator;
window.goToCreatorStep = goToCreatorStep;
window.createNewCharacter = createNewCharacter;
window.toggleInspirationPlayer = toggleInspirationPlayer;
window.toggleInspirationDM = toggleInspirationDM;
window.openExhaustionModal = openExhaustionModal;
window.closeExhaustionModal = closeExhaustionModal;
window.changeExhaustion = changeExhaustion;
window.openConditionsModal = openConditionsModal;
window.closeConditionsModal = closeConditionsModal;
window.updateConditions = updateConditions;
window.toggleEventForm = toggleEventForm;
window.addEvent = addEvent;
window.advanceEventDay = advanceEventDay;
window.deleteEvent = deleteEvent;
window.openTrainingModal = openTrainingModal;
window.closeTrainingModal = closeTrainingModal;

window.shortRest = function() {
    document.querySelectorAll('.spell-slot-check').forEach((slot, index) => {
        slot.checked = false;
        localStorage.setItem(`spell-slot-${index}`, 'unchecked');
    });

    showRollResult('Короткий отдых', '✓', 'Слоты заклинаний восстановлены');
};

window.longRest = function() {
    // Восстанавливаем хиты
    localStorage.setItem(`${activeCharacterId}-hp`, character.hpMax);
    document.getElementById('hp-current-display').textContent = character.hpMax;

    // Восстанавливаем слоты без показа уведомления
    document.querySelectorAll('.spell-slot-check').forEach((slot, index) => {
        slot.checked = false;
        localStorage.setItem(`${activeCharacterId}-spell-slot-${index}`, 'unchecked');
    });

    // Восстанавливаем кости хитов
    localStorage.setItem(`${activeCharacterId}-hit-dice`, character.level);

    showRollResult('Длинный отдых', '✓', 'Хиты и слоты полностью восстановлены');

    // Показываем напоминание о тренировке если есть изучаемые предметы
    const inventoryKey = `${activeCharacterId}-inventory`;
    const inventory = JSON.parse(localStorage.getItem(inventoryKey)) || defaultInventory;
    let hasLearnable = false;
    Object.keys(inventory).forEach(type => {
        inventory[type].forEach(item => {
            if (item.learnable && item.progress < item.target) {
                hasLearnable = true;
            }
        });
    });

    if (hasLearnable) {
        // Открываем модальное окно обучения
        setTimeout(() => {
            openTrainingModal();
        }, 500);
    }

    // Уменьшаем истощение на 1 уровень
    const exhaustion = parseInt(localStorage.getItem(`${activeCharacterId}-exhaustion`) || '0');
    if (exhaustion > 0) {
        const newExhaustion = exhaustion - 1;
        localStorage.setItem(`${activeCharacterId}-exhaustion`, newExhaustion);
        updateExhaustionDisplay();
        setTimeout(() => {
            showRollResult('Истощение', '-1', `Уровень истощения: ${exhaustion} → ${newExhaustion}`);
        }, 1500);
    }

    // Уменьшаем дни до событий
    const events = getEvents();
    let updatedEvents = false;
    events.forEach(event => {
        if (event.daysLeft > 0) {
            event.daysLeft -= 1;
            updatedEvents = true;
        }
    });

    if (updatedEvents) {
        localStorage.setItem(`${activeCharacterId}-events`, JSON.stringify(events));
        renderEvents();

        // Проверяем события на сегодня
        const todayEvents = events.filter(e => e.daysLeft === 0);
        if (todayEvents.length > 0) {
            setTimeout(() => {
                todayEvents.forEach(event => {
                    showRollResult('⏰ Событие сегодня!', event.name, event.location || '');
                });
            }, 2000);
        }
    }
};


// Отображение вкладки обучения (устаревшая - теперь используется модальное окно)
function renderTraining() {
    const container = document.getElementById('training-container');
    if (!container) return; // Контейнер больше не существует

    const inventoryKey = `${activeCharacterId}-inventory`;
    const inventory = JSON.parse(localStorage.getItem(inventoryKey)) || defaultInventory;

    container.innerHTML = '';

    let hasLearnableItems = false;

    // Собираем все изучаемые предметы
    Object.keys(inventory).forEach(type => {
        inventory[type].forEach((item, index) => {
            if (item.learnable) {
                hasLearnableItems = true;
                const div = document.createElement('div');
                div.className = 'training-card';

                const progress = Math.min(100, (item.progress / item.target * 100));
                const isMastered = item.progress >= item.target;

                let statusText = '';
                let statusClass = '';
                if (isMastered) {
                    statusText = 'Освоено!';
                    statusClass = 'status-mastered';
                } else if (item.progress === 0) {
                    statusText = 'Не начато';
                    statusClass = 'status-not-started';
                } else {
                    statusText = `Прогресс: ${item.progress}/${item.target}`;
                    statusClass = 'status-in-progress';
                }

                div.innerHTML = `
                    <div class="training-header">
                        <h4>${item.name}</h4>
                        <span class="training-status ${statusClass}">${statusText}</span>
                    </div>
                    <div class="training-progress">
                        <div class="training-bar">
                            <div class="training-bar-fill" style="width: ${progress}%"></div>
                        </div>
                        <div class="training-info">
                            <span>${item.dice} + ${item.ability.toUpperCase()}</span>
                            <span>${Math.floor(progress)}%</span>
                        </div>
                    </div>
                    <div class="training-manual">
                        <label>Прогресс вручную:</label>
                        <div class="manual-progress-controls">
                            <input type="number" class="progress-input" value="${item.progress}" min="0" max="${item.target}" id="progress-${type}-${index}">
                            <span class="progress-max">/ ${item.target}</span>
                            <button class="btn-save-progress" onclick="saveProgress('${type}', ${index})">💾</button>
                        </div>
                    </div>
                    ${!isMastered ? `<button class="btn-train" onclick="trainItem('${type}', ${index})" data-i18n="train">Тренировать</button>` : ''}
                `;

                container.appendChild(div);
            }
        });
    });

    if (!hasLearnableItems) {
        container.innerHTML = `<div class="empty-state">
            <p>${'Нет изучаемых предметов. Добавьте их во вкладке Инвентарь!'}</p>
        </div>`;
    }
}

// Сохранение прогресса вручную
function saveProgress(type, index) {
    const inventoryKey = `${activeCharacterId}-inventory`;
    const inventory = JSON.parse(localStorage.getItem(inventoryKey)) || defaultInventory;
    const item = inventory[type][index];

    const input = document.getElementById(`progress-${type}-${index}`);
    const newProgress = parseInt(input.value);

    if (isNaN(newProgress) || newProgress < 0) {
        showRollResult('Ошибка', 'Некорректное значение', '');
        return;
    }

    const oldProgress = item.progress;
    item.progress = Math.min(newProgress, item.target);

    localStorage.setItem(inventoryKey, JSON.stringify(inventory));
    renderTraining();
    renderInventory();

    showRollResult('Прогресс обновлён', `${oldProgress} → ${item.progress}`, item.name);
}

// Тренировка одного предмета
function trainItem(type, index) {
    const inventoryKey = `${activeCharacterId}-inventory`;
    const inventory = JSON.parse(localStorage.getItem(inventoryKey)) || defaultInventory;
    const item = inventory[type][index];

    if (!item || !item.learnable || item.progress >= item.target) return;

    // Делаем бросок
    const [count, sides] = item.dice.split('d').map(Number);
    const rolls = rollMultipleDice(count, sides);
    const sum = rolls.reduce((a, b) => a + b, 0);
    const mod = getMod(item.ability);
    const total = sum + mod;

    // Добавляем к прогрессу
    const oldProgress = item.progress;
    inventory[type][index].progress = Math.min(item.progress + total, item.target);
    const newProgress = inventory[type][index].progress;

    // Сохраняем
    localStorage.setItem(inventoryKey, JSON.stringify(inventory));

    // Показываем результат
    const resultMsg = `${item.name}: +${total} (${newProgress}/${item.target})`;
    showRollResult('📚 Тренировка', resultMsg, `${item.dice}(${rolls.join(', ')}) + ${mod}`);

    // Если достигнута цель
    if (newProgress >= item.target && oldProgress < item.target) {
        const completedMsg = appSettings.language === 'en'
            ? `🎉 You have mastered: ${item.name}!`
            : `🎉 Вы овладели: ${item.name}!`;

        setTimeout(() => {
            showRollResult('✓', completedMsg, '');
        }, 1000);
    }

    // Перерисовываем
    renderTraining();
    renderInventory();
}

// Тренировка всех предметов
function trainAll() {
    const inventoryKey = `${activeCharacterId}-inventory`;
    const inventory = JSON.parse(localStorage.getItem(inventoryKey)) || defaultInventory;

    let trained = 0;

    Object.keys(inventory).forEach(type => {
        inventory[type].forEach((item, index) => {
            if (item.learnable && item.progress < item.target) {
                // Делаем бросок
                const [count, sides] = item.dice.split('d').map(Number);
                const rolls = rollMultipleDice(count, sides);
                const sum = rolls.reduce((a, b) => a + b, 0);
                const mod = getMod(item.ability);
                const total = sum + mod;

                // Добавляем к прогрессу
                const oldProgress = item.progress;
                inventory[type][index].progress = Math.min(item.progress + total, item.target);
                const newProgress = inventory[type][index].progress;

                trained++;

                // Показываем результат
                const resultMsg = `${item.name}: +${total} (${newProgress}/${item.target})`;
                showRollResult('📚 Тренировка', resultMsg, `${item.dice}(${rolls.join(', ')}) + ${mod}`);

                // Если достигнута цель
                if (newProgress >= item.target && oldProgress < item.target) {
                    const completedMsg = appSettings.language === 'en'
                        ? `🎉 You have mastered: ${item.name}!`
                        : `🎉 Вы овладели: ${item.name}!`;

                    setTimeout(() => {
                        showRollResult('✓', completedMsg, '');
                    }, (trained + 1) * 1000);
                }
            }
        });
    });

    if (trained === 0) {
        const msg = appSettings.language === 'en'
            ? 'No items to train!'
            : 'Нет предметов для тренировки!';
        alert(msg);
        return;
    }

    // Сохраняем
    localStorage.setItem(inventoryKey, JSON.stringify(inventory));

    // Перерисовываем
    setTimeout(() => {
        renderTraining();
        renderInventory();
    }, trained * 1000 + 500);
}

console.log('🎲 Интерактивный лист персонажа загружен!');
