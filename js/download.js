// download.js - Система скачивания работ

// Конфигурация работ для скачивания
const downloadConfig = {
    'easy': {
        title: 'Легкие проекты',
        items: [
            {
                id: 'easy-1',
                title: 'Знакомство с HTML и CSS(1)',
                description: 'Первый сайт созданный во время обучения',
                downloadLink: './light_work/work1.zip',
                requirements: ['HTML', 'CSS'],
                size: '2.4 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-2',
                title: 'Знакомство с HTML и CSS(2)',
                downloadLink: './light_work/work2.zip',
                requirements: ['HTML', 'CSS'],
                size: '3.1 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-3',
                title: 'Знакомство с HTML и CSS(3)',
                downloadLink: './light_work/work3.zip',
                requirements: ['HTML', 'CSS'],
                size: '1.8 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-4',
                title: 'Знакомство с HTML и CSS(4)',
                downloadLink: './light_work/work4.zip',
                requirements: ['HTML', 'CSS'],
                size: '2.7 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-5',
                title: 'Шрифты',
                downloadLink: './light_work/work5.zip',
                requirements: ['HTML', 'CSS', 'Шрифты'],
                size: '4.2 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-6',
                title: 'Таблицы(1)',
                downloadLink: './light_work/work6.zip',
                requirements: ['HTML', 'CSS', 'Таблицы'],
                size: '1.9 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-7',
                title: 'Таблицы(2)',
                downloadLink: './light_work/work7.zip',
                requirements: ['HTML', 'CSS', 'Таблицы'],
                size: '2.3 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-8',
                title: 'Цвет фона(1)',
                downloadLink: './light_work/work8.zip',
                requirements: ['HTML', 'CSS', 'Градиенты'],
                size: '1.5 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-9',
                title: 'Цвет фона(2)',
                downloadLink: './light_work/work9.zip',
                requirements: ['HTML', 'CSS', 'Градиенты'],
                size: '2.1 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-10',
                title: 'Позиционирование',
                downloadLink: './light_work/work10.zip',
                requirements: ['HTML', 'CSS', 'Flexbox'],
                size: '3.4 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-11',
                title: 'Псевдоклассы ":hover, :has, :visited"',
                downloadLink: './light_work/work11.zip',
                requirements: ['HTML', 'CSS', 'Псевдоклассы'],
                size: '2.8 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-12',
                title: 'Псевдоклассы ":after :before"',
                downloadLink: './light_work/work12.zip',
                requirements: ['HTML', 'CSS', 'Псевдоклассы'],
                size: '3.2 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-13',
                title: 'Псевдокласс ":child"',
                downloadLink: './light_work/work13.zip',
                requirements: ['HTML', 'CSS', 'Псевдоклассы'],
                size: '2.6 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-14',
                title: 'Flex(1)',
                downloadLink: './light_work/work14.zip',
                requirements: ['HTML', 'CSS', 'Flexbox'],
                size: '3.9 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-15',
                title: 'Flex(2)',
                downloadLink: './light_work/work15.zip',
                requirements: ['HTML', 'CSS', 'Flexbox'],
                size: '4.1 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-16',
                title: 'Float',
                downloadLink: './light_work/work16.zip',
                requirements: ['HTML', 'CSS', 'Float'],
                size: '2.5 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-17',
                title: 'Трансформация(1)',
                downloadLink: './light_work/work17.zip',
                requirements: ['HTML', 'CSS', 'Transform'],
                size: '3.7 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-18',
                title: 'Трансформация(2)',
                downloadLink: './light_work/work18.zip',
                requirements: ['HTML', 'CSS', 'Transform'],
                size: '4.0 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-19',
                title: 'Трансформация(3)',
                downloadLink: './light_work/work19.zip',
                requirements: ['HTML', 'CSS', 'Transform'],
                size: '3.8 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-20',
                title: 'Трансформация(4)',
                downloadLink: './light_work/work20.zip',
                requirements: ['HTML', 'CSS', 'Transform'],
                size: '4.3 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-21',
                title: 'Анимации',
                downloadLink: './light_work/work21.zip',
                requirements: ['HTML', 'CSS', 'Animations'],
                size: '5.2 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-22',
                title: 'Спрайты',
                downloadLink: './light_work/work22.zip',
                requirements: ['HTML', 'CSS', 'Sprite'],
                size: '6.1 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-23',
                title: 'Спрайт анимированный',
                downloadLink: './light_work/work23.zip',
                requirements: ['HTML', 'CSS', 'Sprite', 'Animations'],
                size: '7.3 MB',
                icon: './img/head_title/html.png'
            },
            {
                id: 'easy-24',
                title: 'Векторная графика',
                downloadLink: './light_work/work24.zip',
                requirements: ['HTML', 'CSS', 'SVG'],
                size: '5.8 MB',
                icon: './img/head_title/html.png'
            }
        ]
    },
    'medium': {
        title: 'Средние проекты',
        items: []
    },
    'hard': {
        title: 'Сложные проекты',
        items: []
    }
};

// Инициализация системы скачивания
function initDownloadSystem() {
    renderDownloadList();
    setupDownloadEventListeners();
}

// Рендер списка скачиваний
function renderDownloadList() {
    const outputTab = document.getElementById('output-tab');
    if (!outputTab) return;
    
    outputTab.innerHTML = '';
    
    // Создаем контейнер для списка
    const container = document.createElement('div');
    container.className = 'download-container';
    
    // Заголовок
    const header = document.createElement('h2');
    header.textContent = 'Скачать мои работы';
    header.className = 'download-header';
    container.appendChild(header);
    
    // Описание
    const description = document.createElement('p');
    description.textContent = 'Все проекты упакованы в ZIP-архивы и готовы к скачиванию. Нажмите на кнопку скачивания для получения архива.';
    description.className = 'download-description';
    container.appendChild(description);
    
    // Создаем список по уровням
    Object.keys(downloadConfig).forEach(level => {
        const levelConfig = downloadConfig[level];
        if (levelConfig.items.length === 0) return;
        
        // Секция уровня
        const levelSection = document.createElement('div');
        levelSection.className = 'download-level-section';
        
        // Заголовок уровня
        const levelHeader = document.createElement('h3');
        levelHeader.textContent = levelConfig.title;
        levelHeader.className = 'download-level-header';
        levelSection.appendChild(levelHeader);
        
        // Счетчик проектов
        const counter = document.createElement('span');
        counter.className = 'download-counter';
        counter.textContent = `${levelConfig.items.length} проектов`;
        levelHeader.appendChild(counter);
        
        // Сетка проектов
        const grid = document.createElement('div');
        grid.className = 'download-grid';
        
        // Добавляем проекты в сетку
        levelConfig.items.forEach(project => {
            const projectCard = createProjectCard(project, level);
            grid.appendChild(projectCard);
        });
        
        levelSection.appendChild(grid);
        container.appendChild(levelSection);
    });
    
    // Добавляем информацию о форматах
    const formatInfo = document.createElement('div');
    formatInfo.className = 'download-info';
    formatInfo.innerHTML = `
        <h4>📦 Форматы файлов</h4>
        <ul>
            <li><strong>.zip</strong> - Архив с проектом (содержит HTML, CSS, изображения)</li>
            <li><strong>.html</strong> - Основной файл проекта</li>
            <li><strong>.css</strong> - Стили проекта</li>
            <li><strong>.js</strong> - JavaScript файлы (если есть)</li>
        </ul>
    `;
    container.appendChild(formatInfo);
    
    // Инструкция по установке
    const instructions = document.createElement('div');
    instructions.className = 'download-instructions';
    instructions.innerHTML = `
        <h4>⚡ Как установить проект:</h4>
        <ol>
            <li>Скачайте ZIP-архив проекта</li>
            <li>Разархивируйте файлы в нужную папку</li>
            <li>Откройте файл <code>index.html</code> в браузере</li>
            <li>Для редактирования откройте файлы в текстовом редакторе</li>
        </ol>
    `;
    container.appendChild(instructions);
    
    outputTab.appendChild(container);
}

// Создание карточки проекта
function createProjectCard(project, level) {
    const card = document.createElement('div');
    card.className = 'download-card';
    card.setAttribute('data-project-id', project.id);
    card.setAttribute('data-project-level', level);
    
    // Иконка проекта
    const iconDiv = document.createElement('div');
    iconDiv.className = 'download-card-icon';
    const icon = document.createElement('img');
    icon.src = project.icon || './img/head_title/html.png';
    icon.alt = project.title;
    iconDiv.appendChild(icon);
    
    // Контент карточки
    const content = document.createElement('div');
    content.className = 'download-card-content';
    
    // Заголовок
    const title = document.createElement('h4');
    title.textContent = project.title;
    content.appendChild(title);
    
    // Описание (если есть)
    if (project.description) {
        const desc = document.createElement('p');
        desc.textContent = project.description;
        desc.className = 'download-card-desc';
        content.appendChild(desc);
    }
    
    // Технологии
    if (project.requirements && project.requirements.length > 0) {
        const techDiv = document.createElement('div');
        techDiv.className = 'download-card-tech';
        project.requirements.forEach(tech => {
            const techSpan = document.createElement('span');
            techSpan.className = 'tech-tag';
            techSpan.textContent = tech;
            techDiv.appendChild(techSpan);
        });
        content.appendChild(techDiv);
    }
    
    // Размер файла
    if (project.size) {
        const sizeDiv = document.createElement('div');
        sizeDiv.className = 'download-card-size';
        const sizeIcon = document.createElement('span');
        sizeIcon.textContent = '📦 ';
        const sizeText = document.createElement('span');
        sizeText.textContent = project.size;
        sizeDiv.appendChild(sizeIcon);
        sizeDiv.appendChild(sizeText);
        content.appendChild(sizeDiv);
    }
    
    // Кнопка скачивания
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'download-card-button';
    const button = document.createElement('button');
    button.className = 'download-btn';
    button.setAttribute('data-download-link', project.downloadLink);
    button.setAttribute('data-project-title', project.title);
    
    const buttonIcon = document.createElement('img');
    buttonIcon.src = './img/footer/download-icon.png';
    buttonIcon.alt = 'Скачать';
    buttonIcon.className = 'download-btn-icon';
    
    const buttonText = document.createElement('span');
    buttonText.textContent = 'Скачать';
    
    button.appendChild(buttonIcon);
    button.appendChild(buttonText);
    buttonDiv.appendChild(button);
    
    // Собираем карточку
    card.appendChild(iconDiv);
    card.appendChild(content);
    card.appendChild(buttonDiv);
    
    return card;
}

// Настройка обработчиков событий
function setupDownloadEventListeners() {
    // Обработчик клика по кнопке скачивания
    document.addEventListener('click', function(e) {
        const downloadBtn = e.target.closest('.download-btn');
        if (downloadBtn) {
            e.preventDefault();
            e.stopPropagation();
            
            const downloadLink = downloadBtn.getAttribute('data-download-link');
            const projectTitle = downloadBtn.getAttribute('data-project-title');
            
            if (downloadLink) {
                triggerDownload(downloadLink, projectTitle);
                
                // Показываем уведомление
                showDownloadNotification(projectTitle);
            }
        }
    });
    
    // Обработчик для отслеживания скачиваний
    document.addEventListener('download-started', function(e) {
        console.log('Скачивание начато:', e.detail.filename);
    });
    
    // Обработчик для обновления статистики скачиваний
    document.addEventListener('download-completed', function(e) {
        updateDownloadStats(e.detail.projectId);
    });
}

// Запуск скачивания
function triggerDownload(url, filename) {
    // Создаем событие начала скачивания
    const startEvent = new CustomEvent('download-started', {
        detail: { filename: filename, url: url, timestamp: new Date() }
    });
    document.dispatchEvent(startEvent);
    
    // Создаем временную ссылку для скачивания
    const link = document.createElement('a');
    link.href = url;
    link.download = filename ? `${filename}.zip` : 'project.zip';
    link.style.display = 'none';
    
    // Добавляем в DOM и кликаем
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Создаем событие завершения скачивания
    setTimeout(() => {
        const completeEvent = new CustomEvent('download-completed', {
            detail: { 
                filename: filename, 
                url: url, 
                timestamp: new Date(),
                projectId: getProjectIdFromUrl(url)
            }
        });
        document.dispatchEvent(completeEvent);
    }, 100);
}

// Получение ID проекта из URL
function getProjectIdFromUrl(url) {
    const match = url.match(/\/(work\d+)\./);
    return match ? match[1] : null;
}

// Показ уведомления о скачивании
function showDownloadNotification(projectTitle) {
    // Удаляем предыдущее уведомление
    const existingNotification = document.querySelector('.download-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Создаем новое уведомление
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    
    const icon = document.createElement('img');
    icon.src = './img/footer/download-success.png';
    icon.alt = 'Успешно';
    icon.className = 'download-notification-icon';
    
    const text = document.createElement('span');
    text.textContent = `Скачивание "${projectTitle}" начато`;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'download-notification-close';
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    notification.appendChild(icon);
    notification.appendChild(text);
    notification.appendChild(closeBtn);
    
    // Добавляем в body
    document.body.appendChild(notification);
    
    // Показываем уведомление
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Автоматически скрываем через 5 секунд
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Обновление статистики скачиваний
function updateDownloadStats(projectId) {
    let downloadStats = JSON.parse(localStorage.getItem('download-stats') || '{}');
    
    if (!downloadStats[projectId]) {
        downloadStats[projectId] = {
            count: 0,
            lastDownload: null,
            firstDownload: new Date().toISOString()
        };
    }
    
    downloadStats[projectId].count++;
    downloadStats[projectId].lastDownload = new Date().toISOString();
    
    localStorage.setItem('download-stats', JSON.stringify(downloadStats));
    
    console.log(`Проект ${projectId} скачан ${downloadStats[projectId].count} раз(а)`);
}

// Получение статистики скачиваний
function getDownloadStats() {
    return JSON.parse(localStorage.getItem('download-stats') || '{}');
}

// Экспорт статистики
function exportDownloadStats() {
    const stats = getDownloadStats();
    const dataStr = JSON.stringify(stats, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'download-stats.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Ждем загрузки других систем
    setTimeout(() => {
        initDownloadSystem();
        
        // Проверяем наличие файлов для скачивания
        checkDownloadFiles();
        
        console.log('Система скачивания инициализирована');
    }, 1000);
});

// Проверка доступности файлов для скачивания
async function checkDownloadFiles() {
    console.log('Проверка доступности файлов для скачивания...');
    
    // Можно добавить проверку существования файлов через fetch
    // Но это требует CORS разрешений на сервере
    
    // Вместо этого просто логируем
    Object.keys(downloadConfig).forEach(level => {
        const levelConfig = downloadConfig[level];
        console.log(`${levelConfig.title}: ${levelConfig.items.length} проектов доступно для скачивания`);
    });
}