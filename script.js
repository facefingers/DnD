// Настройки приложения
let appSettings = {
    language: 'ru',
    onlineMode: false,
    darkTheme: false
};

// Локализация
const translations = {
    ru: {
        // Основные показатели
        'level-short': 'Уровень',
        'hp': 'Хиты',
        'ac': 'КБ',
        'init': 'Иниц',
        'speed': 'Скор',

        // Вкладки
        'tab-stats': 'Статы',
        'tab-actions': 'Действия',
        'tab-spells': 'Заклинания',
        'tab-inventory': 'Инвентарь',
        'tab-features': 'Черты',
        'tab-notes': 'Заметки',
        'tab-training': 'Обучение',

        // Статы
        'section-stats': 'Характеристики',
        'edit-stats': '⚙️ Изменить',
        'abilities': 'Характеристики',
        'value': 'Значение',
        'modifier': 'Модиф.',
        'saving-throw': 'Спасбросок',
        'proficiency-bonus': 'Бонус мастерства',
        'passive-perception': 'Пассивная внимательность',
        'skills': 'Навыки',

        // Действия
        'section-attacks': 'Атаки',
        'section-combat': 'Действия в бою',
        'hit': 'Попадание',
        'damage': 'Урон',

        // Заклинания
        'section-spellcasting': 'Характеристики заклинателя',
        'spell-dc': 'СЛ заклинаний',
        'spell-attack': 'Бонус атаки',
        'cantrips': 'Заговоры (неограниченно)',
        'level-1-spells': 'Заклинания 1 уровня',
        'spell-slots': 'Ячейки',
        'total': 'всего',

        // Инвентарь
        'section-inventory': 'Инвентарь',
        'add-item': '+ Добавить',
        'edit-item': 'Изменить',
        'item-name': 'Название предмета',
        'item-type': 'Тип',
        'description': 'Описание',
        'quantity': 'Количество',
        'equipped': 'Экипировано',
        'learnable': 'Можно изучать/тренироваться',
        'learning-target': 'Цель (очков для овладения)',
        'dice-roll': 'Бросок кости',
        'ability-modifier': 'Модификатор',
        'weapon': 'Оружие',
        'armor': 'Броня',
        'tool': 'Инструменты',
        'consumable': 'Расходники',
        'ingredient': 'Ингредиенты',
        'misc': 'Разное',
        'progress': 'Прогресс',

        // Обучение
        'section-training': 'Изучаемые предметы',
        'training-desc': 'Тренируйтесь с этими предметами во время длинных отдыхов',
        'train': 'Тренировать',
        'train-all': 'Тренировать все',
        'mastered': 'Освоено!',
        'not-started': 'Не начато',

        // Черты
        'section-racial': 'Расовые черты',
        'section-class': 'Классовые черты',
        'section-personality': 'Личность',

        // Общие
        'save-btn': 'Сохранить',
        'cancel-btn': 'Отмена',
        'delete-btn': 'Удалить',
        'close': 'Закрыть',
        'char-updated': 'Персонаж успешно обновлён',
        'short-rest': 'Короткий отдых',
        'short-rest-desc': 'Слоты заклинаний восстановлены',
        'long-rest': 'Длинный отдых',
        'long-rest-desc': 'Хиты и слоты полностью восстановлены',
        'my-characters': 'Мои персонажи',
        'create-character': '+ Создать нового персонажа'
    },
    en: {
        // Main stats
        'level-short': 'Level',
        'hp': 'HP',
        'ac': 'AC',
        'init': 'Init',
        'speed': 'Speed',

        // Tabs
        'tab-stats': 'Stats',
        'tab-actions': 'Actions',
        'tab-spells': 'Spells',
        'tab-inventory': 'Inventory',
        'tab-features': 'Features',
        'tab-notes': 'Notes',
        'tab-training': 'Training',

        // Stats
        'section-stats': 'Abilities',
        'edit-stats': '⚙️ Edit',
        'abilities': 'Abilities',
        'value': 'Score',
        'modifier': 'Modifier',
        'saving-throw': 'Save',
        'proficiency-bonus': 'Proficiency Bonus',
        'passive-perception': 'Passive Perception',
        'skills': 'Skills',

        // Actions
        'section-attacks': 'Attacks',
        'section-combat': 'Combat Actions',
        'hit': 'Hit',
        'damage': 'Damage',

        // Spells
        'section-spellcasting': 'Spellcasting',
        'spell-dc': 'Spell DC',
        'spell-attack': 'Spell Attack',
        'cantrips': 'Cantrips (at will)',
        'level-1-spells': '1st Level Spells',
        'spell-slots': 'Spell Slots',
        'total': 'total',

        // Inventory
        'section-inventory': 'Inventory',
        'add-item': '+ Add',
        'edit-item': 'Edit',
        'item-name': 'Item Name',
        'item-type': 'Type',
        'description': 'Description',
        'quantity': 'Quantity',
        'equipped': 'Equipped',
        'learnable': 'Can be learned/trained',
        'learning-target': 'Target (points to master)',
        'dice-roll': 'Dice Roll',
        'ability-modifier': 'Ability Modifier',
        'weapon': 'Weapon',
        'armor': 'Armor',
        'tool': 'Tools',
        'consumable': 'Consumables',
        'ingredient': 'Ingredients',
        'misc': 'Misc',
        'progress': 'Progress',

        // Training
        'section-training': 'Training Items',
        'training-desc': 'Train with these items during long rests',
        'train': 'Train',
        'train-all': 'Train All',
        'mastered': 'Mastered!',
        'not-started': 'Not Started',

        // Features
        'section-racial': 'Racial Features',
        'section-class': 'Class Features',
        'section-personality': 'Personality',

        // Common
        'save-btn': 'Save',
        'cancel-btn': 'Cancel',
        'delete-btn': 'Delete',
        'close': 'Close',
        'char-updated': 'Character updated successfully',
        'short-rest': 'Short Rest',
        'short-rest-desc': 'Spell slots restored',
        'long-rest': 'Long Rest',
        'long-rest-desc': 'HP and spell slots fully restored',
        'my-characters': 'My Characters',
        'create-character': '+ Create New Character'
    }
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
    ac: 14
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

    const profLabel = appSettings.language === 'en' ? 'Proficiency' : 'Мастерство';
    const intLabel = appSettings.language === 'en' ? 'Intelligence' : 'Интеллект';

    // Используем переводы для заголовков
    const dcKey = translations[appSettings.language]['spell-dc'] || 'СЛ заклинаний';
    const attackKey = translations[appSettings.language]['spell-attack'] || 'Бонус атаки';

    document.getElementById('spell-dc-calc').innerHTML =
        `<strong>${dcKey}</strong>: 8 + ${profLabel} (${prof}) + ${intLabel} (${intMod}) = <strong>${spellDC}</strong>`;
    document.getElementById('spell-attack-calc').innerHTML =
        `<strong>${attackKey}</strong>: ${profLabel} (${prof}) + ${intLabel} (${intMod}) = <strong>+${spellAttack}</strong>`;

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
    const msg = appSettings.language === 'en'
        ? 'How many HP to restore?'
        : 'Сколько хитов восстановить?';

    const amount = prompt(msg);
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
    const msg = appSettings.language === 'en'
        ? 'How much damage?'
        : 'Сколько урона?';

    const amount = prompt(msg);
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

    const successMsg = translations[appSettings.language]['char-updated'];
    showRollResult('✓', successMsg, '');
}

// Инвентарь
function renderInventory() {
    const container = document.getElementById('inventory-container');
    const inventoryKey = `${activeCharacterId}-inventory`;
    const inventory = JSON.parse(localStorage.getItem(inventoryKey)) || defaultInventory;

    container.innerHTML = '';

    const categories = {
        weapon: translations[appSettings.language]['weapon'] || 'Оружие',
        armor: translations[appSettings.language]['armor'] || 'Броня',
        tool: translations[appSettings.language]['tool'] || 'Инструменты',
        consumable: translations[appSettings.language]['consumable'] || 'Расходники',
        ingredient: translations[appSettings.language]['ingredient'] || 'Ингредиенты',
        misc: translations[appSettings.language]['misc'] || 'Разное'
    };

    Object.keys(categories).forEach(type => {
        if (!inventory[type] || inventory[type].length === 0) return;

        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `
            <span>${categories[type]}</span>
            <span class="category-count">${inventory[type].length}</span>
        `;
        container.appendChild(header);

        inventory[type].forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'inventory-item';
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
        const msg = appSettings.language === 'en' ? 'Enter item name' : 'Введите название предмета';
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

// Debug: отслеживание кликов
document.addEventListener('click', (e) => {
    console.log('🖱️ Click detected:', {
        target: e.target.tagName,
        class: e.target.className,
        id: e.target.id,
        x: e.clientX,
        y: e.clientY
    });
}, true);

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing app...');

    // Проверяем наличие всех модальных окон
    const modals = document.querySelectorAll('.modal');
    console.log(`Found ${modals.length} modals`);
    modals.forEach((modal, i) => {
        console.log(`  Modal ${i}: ${modal.id}, active: ${modal.classList.contains('active')}`);
        // Принудительно закрываем все модальные окна
        modal.classList.remove('active');
    });

    // Загружаем настройки приложения
    loadAppSettings();

    // Загружаем персонажей
    loadCharacters();

    // Устанавливаем имя персонажа
    const nameDisplay = document.getElementById('character-name-display');
    if (nameDisplay) {
        nameDisplay.textContent = character.name;
    } else {
        console.error('❌ character-name-display not found');
    }

    // Загружаем хиты текущего персонажа
    const savedHP = localStorage.getItem(`${activeCharacterId}-hp`);
    const currentHP = savedHP ? parseInt(savedHP) : character.hpMax;
    const hpDisplay = document.getElementById('hp-current-display');
    if (hpDisplay) {
        hpDisplay.textContent = currentHP;
    } else {
        console.error('❌ hp-current-display not found');
    }

    // Обновляем все расчеты
    updateAllCalculations();

    // Рендерим инвентарь и обучение
    renderInventory();
    renderTraining();

    // Переключение вкладок
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
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
        tabaxi: 'Таборакс',
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
        hpMax: parseInt(document.getElementById('new-hp-max').value)
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
    // Применяем язык
    applyLanguage(appSettings.language);
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.textContent = appSettings.language === 'en' ? 'EN' : 'RU';
        langBtn.classList.toggle('active', appSettings.language === 'en');
    }

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

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Перерисовываем инвентарь и обучение с новыми переводами
    renderInventory();
    renderTraining();
}

function toggleLanguage() {
    appSettings.language = appSettings.language === 'en' ? 'ru' : 'en';
    saveAppSettings();
    applyAppSettings();
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
window.toggleLanguage = toggleLanguage;
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
window.openCharacterList = openCharacterList;
window.closeCharacterList = closeCharacterList;
window.deleteCharacter = deleteCharacter;
window.openCharacterCreator = openCharacterCreator;
window.closeCharacterCreator = closeCharacterCreator;
window.goToCreatorStep = goToCreatorStep;
window.createNewCharacter = createNewCharacter;

window.shortRest = function() {
    document.querySelectorAll('.spell-slot-check').forEach((slot, index) => {
        slot.checked = false;
        localStorage.setItem(`spell-slot-${index}`, 'unchecked');
    });

    const title = translations[appSettings.language]['short-rest'];
    const desc = translations[appSettings.language]['short-rest-desc'];
    showRollResult(title, '✓', desc);
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

    const title = translations[appSettings.language]['long-rest'];
    const desc = translations[appSettings.language]['long-rest-desc'];
    showRollResult(title, '✓', desc);

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
        const reminderMsg = appSettings.language === 'en'
            ? 'You have items to train! Check the Training tab.'
            : 'У вас есть предметы для тренировки! Проверьте вкладку Обучение.';
        setTimeout(() => {
            showRollResult('💡', reminderMsg, '');
        }, 1500);
    }
};


// Отображение вкладки обучения
function renderTraining() {
    const container = document.getElementById('training-container');
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
                    statusText = translations[appSettings.language]['mastered'] || 'Освоено!';
                    statusClass = 'status-mastered';
                } else if (item.progress === 0) {
                    statusText = translations[appSettings.language]['not-started'] || 'Не начато';
                    statusClass = 'status-not-started';
                } else {
                    const progressText = translations[appSettings.language]['progress'] || 'Прогресс';
                    statusText = `${progressText}: ${item.progress}/${item.target}`;
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
                    ${!isMastered ? `<button class="btn-train" onclick="trainItem('${type}', ${index})" data-i18n="train">Тренировать</button>` : ''}
                `;

                container.appendChild(div);
            }
        });
    });

    if (!hasLearnableItems) {
        container.innerHTML = `<div class="empty-state">
            <p>${appSettings.language === 'en' ? 'No learnable items yet. Add some from the Inventory tab!' : 'Нет изучаемых предметов. Добавьте их во вкладке Инвентарь!'}</p>
        </div>`;
    }

    // Применяем переводы к кнопкам
    applyLanguage(appSettings.language);
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

console.log('🎲 Таборакс - лист персонажа загружен!');
console.log('⚙️ Все функции доступны');

// Показываем уведомление что все загружено
setTimeout(() => {
    showRollResult('✓ Готово', 'Приложение загружено', 'Все функции работают');
}, 500);
