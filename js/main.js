$(() => {
  let desktop = $('.desktop');
  let listAppsDesktop = [
    {
      image: 'Dump',
      name: 'Lixeira',
      noArrowIcon: true
    },
    {
      image: 'Chrome',
      name: 'Google\nChrome'
    },
    {
      image: 'Steam',
      name: 'Steam'
    },
    {
      image: 'Firefox',
      name: 'Mozilla\nFirefox'
    },
    {
      image: 'Discord',
      name: 'Discord'
    },
    {
      image: 'Photoshop',
      name: 'Photoshop'
    },
    {
      image: 'Whatsapp',
      name: 'Whatsapp'
    },
  ];

  listAppsDesktop.map(app => {
    arrowIcon = !app.noArrowIcon ? `
      <img
        src='./img/Shortcut_Desktop_Icon.png'
        alt='ícone de atalho'
        class='shortcut-arrow-icon'
      />
    ` : '';

    desktop.append(`
      <article class='shortcut'>
        <div class='shortcut-icon-container'>
          <img
            src='./img/apps/${app.image}.png'
            alt='${app.name}'
            class='shortcut-app-icon'
          />
          ${arrowIcon}
        </div>
        <p class='shortcut-name'>${app.name}</p>
      </article>
    `);
  });

  let appsTaskbarSection = $('.taskbar .apps');
  let listAppsTaskbar = ['Explorer', 'Chrome', 'Vscode', 'Discord'];

  listAppsTaskbar.map(app => {
    appsTaskbarSection.append(`
      <button type='button' class='app'>
        <img src='./img/apps/${app}.png' alt='${app}'/>
      </button>
    `);
  });


  const loadTime = () => {
    let date = new Date();

    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let time = `<span>${hours}:${minutes}</span>`;

    let day = date.getDay() < 10 ? `0${date.getDate()}` : date.getDate();
    let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let year = date.getFullYear();

    let fullDate = `<span>${day}/${month}/${year}</span>`;

    $('#clock-btn').html(`${time} ${fullDate}`);
    requestAnimationFrame(loadTime);
  }

  loadTime();
});