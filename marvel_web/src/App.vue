<template>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>

  <body>
    <header>
      <div class="navbar">
        <div class="dropdown">
        <button class="dropbtn"><img src="@/assets/menu.png" /></button>
        <div class="dropdown-content">
          <router-link to="/about">
          <a class="action_btn"> History </a>
        </router-link>
        </div>
      </div>

      </div>
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/marvel_logo.jpg" />
        </router-link>
      </div>
      <div class="flecha">
        <img src="@/assets/flecha.png" />
      </div>

    </header>



    <router-view />
  </body>
</template>

