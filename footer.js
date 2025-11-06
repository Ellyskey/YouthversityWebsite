// components/footer.js

// Create a template for the footer content
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style>
  footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-top: 1px solid #ccc;
}

.footer-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-left p, .footer-left a {
  margin: 0;
  color: black;
  font-size: 14px;
  text-decoration: none;
}

.footer-center {
  font-size: 24px;
}

.footer-center a {
  color: black;
  text-decoration: none;
}

.footer-right {
  display: flex;
  align-items: center;
}

.footer-right a {
  margin: 0 5px;
}

.footer-right img {
  width: 24px;
  height: 24px;
}
  </style>

  <footer>
        <div class="footer-left">
            <p>© 2025 by YOUthversity</p>
            <p><a href="mailto:ellyskey.info@gmail.com">Mail Contact</a></p>
        </div>
        <div class="footer-center">
            <a href="#" id="back-to-top">^</a>
        </div>
        <div class="footer-right">
            <a href="https://twitch.tv/ellyskey" target="_blank"><img src="images/twitch-icon.png" alt="Twitch"></a>
            <a href="https://instagram.com/ellyskey" target="_blank"><img src="images/instagram-icon.png" alt="Instagram"></a>
            <a href="https://discord.gg/mPkkexxbQw" target="_blank"><img src="images/discord-icon.png" alt="Discord"></a>
            <a href="https://twitter.com/ellyskey" target="_blank"><img src="images/twitter-icon.png" alt="Twitter"></a>
            <a href="https://youtube.com/@ellyskey" target="_blank"><img src="images/youtube-icon.png" alt="YouTube"></a>
            <a href="https://tiktok.com/@ellyskey" target="_blank"><img src="images/tiktok-icon.png" alt="TikTok"></a>
        </div>
          
<!-- Metricool tracker-->
<script>function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"400951fdbd536626e3e03bb0cfaabc25"})});</script>
    
    </footer>
`;

class CustomFooter extends HTMLElement {
  constructor() {
    super();
    // Attach a shadow root
    this.attachShadow({ mode: 'open' });
    // Append the template content
    this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

// Define the custom element
customElements.define('custom-footer', CustomFooter);