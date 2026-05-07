// components/header.js

// Create a template for the header content
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <style>
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #FAD8C5;
      color: black;
      padding: 10px 20px;
    }

    .logo-title > a {
      display: flex;
      align-items: center;
      flex-direction: row;
      text-decoration: none;

      color: black;

      & .highlight {
        color: var(--highlight-color);
      }
    }

    .logo {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }

    .site-title {
      margin: 0;
      font-size: 24px;
      font-decoration: none;
    }

    nav {
      display: flex;
    }

    .nav-links {
      list-style: none;
      display: flex;
      margin: 0 80px 0 0;
      padding: 0;
    }

    .nav-links li {
      margin: 0 10px;
    }

    .nav-links a {
      color: black;
      text-decoration: none;
      font-size: 18px;
      width: 100%;
      display: block;
    }

    /* Dropdown */
    .dropdown {
      float: left;
      overflow: hidden;
    }

    .dropdown .dropbtn {
      font-size: 18px;
      border: none;
      outline: none;
      background-color: inherit;
      font-family: inherit;
      margin: 0;
      cursor: pointer;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    .dropdown-content a {
      float: none;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
      width: 100%;
    }

    /* Hover effects — pointer devices only (not touch) */
    @media (hover: hover) {
      .nav-links a:hover {
        text-decoration: underline;
      }

      .navbar a:hover,
      .dropdown:hover .dropbtn {
        text-decoration: underline;
      }

      .dropdown-content a:hover {
        text-decoration: underline;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }
    }

    /* Hamburger button */
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
    }

    .hamburger span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: black;
      border-radius: 3px;
      transition: transform 0.3s, opacity 0.3s;
    }

    .hamburger.open span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.open span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.open span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    /* Mobile */
    @media (width <= 800px) {
      header {
        flex-wrap: wrap;
      }

      .hamburger {
        display: flex;
      }

      nav {
        display: none;
        width: 100%;
      }

      nav.open {
        display: block;
      }

      .nav-links {
        flex-direction: column;
        margin: 0;
        padding: 10px 0;

        & > li,
        & > div {
          margin: 0;
          display: block;

          & > a, 
          & > button {
            padding: 10px 0;
            width: 100%;
            text-align: left;
          }
        }
      }

      .dropdown {
        float: none;
        overflow: visible;
      }

      .dropdown-content {
        position: static;
        box-shadow: none;
        margin-top: 10px;
      }

      .dropdown-content.open {
        display: block;
      }

      .dropbtn {
        padding: 0;
      }
    }

    .flex-container-comingsoon {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  </style>

  <header>
    <div class="logo-title">
      <a href="/">
        <img src="images/YOUthversityLogo.avif" alt="YOUthversity" class="logo">
        <h1 class="site-title"><span class="highlight">YOU</span>thversity</h1>
      </a>
    </div>
    <button class="hamburger" aria-label="Toggle navigation" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/who">Who</a></li>
        <li><a href="/where">Where</a></li>
        <div class="dropdown">
          <button class="dropbtn">Activities ▾</button>
          <div class="dropdown-content">
            <a href="/bookclub">Bookish</a>
            <a href="/creativity">Creativity</a>
            <a href="/wellness">Wellness</a>
            <a href="/languages">Languages</a>
            <a href="/gaming">Gaming</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">More ▾</button>
          <div class="dropdown-content">
            <a href="https://ellyskey.notion.site/Elly-s-Info-Page-29076275cf004a24a5e74973f5f70019?pvs=4">Elly's Mediakit</a>
          </div>
        </div>
      </ul>
    </nav>
  </header>
`;

class CustomHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    const hamburger = this.shadowRoot.querySelector('.hamburger');
    const nav = this.shadowRoot.querySelector('nav');
    const dropbtns = this.shadowRoot.querySelectorAll('.dropbtn');

    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    dropbtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const content = btn
          .closest('.dropdown')
          .querySelector('.dropdown-content');
        content.classList.toggle('open');
      });
    });
  }
}

// Define the custom element
customElements.define('custom-header', CustomHeader);
