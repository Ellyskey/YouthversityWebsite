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

.logo-title {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

.site-title {
  margin: 0;
  font-size: 24px;
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
}

.nav-links a:hover {
  text-decoration: underline;
}

/* Dropdown Button */
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
}

.navbar a:hover, .dropdown:hover .dropbtn {
  text-decoration: underline;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  text-decoration: underline;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.flex-container-comingsoon{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
    </style>
  <header>
    <div class="logo-title">
        <img src="images/YOUthversityLogo.png" alt="YOUthversity" class="logo">
        <h1 class="site-title"><span class="highlight">YOU</span>thversity</h1>
    </div>
    <nav>
        <ul class="nav-links">
            <li><a href="https://youthversity.org/">Home</a></li>
            <li><a href="https://youthversity.org/who">Who</a></li>
            <li><a href="https://youthversity.org/where">Where</a></li>
            <div class="dropdown"><i class="fa fa-caret-down"></i>
                <button class="dropbtn">Activities</button>
                <div class="dropdown-content">
                  <a href="https://youthversity.org/bookclub">Bookclub</a>
                  <a href="https://youthversity.org/creativity">Creativity</a>
                  <a href="https://youthversity.org/wellness">Wellness</a>
                  <a href="https://youthversity.org/languages">Languages</a>
                  <a href="https://youthversity.org/gaming">Gaming</a>
                </div>
              </div>
            <div class="dropdown"><i class="fa fa-caret-down"></i>
                <button class="dropbtn">More</button>
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
    // Attach a shadow root to the element
    this.attachShadow({ mode: 'open' }); // 'open' allows external JS to access shadow DOM if needed
    // Append the template content to the shadow root
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
}

// Define the custom element
customElements.define('custom-header', CustomHeader);