class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        <footer class="footer bg-white text-black py-3">
        <div class="container">
        <div class="row justify-content-between align-items-center text-center">
        <div class="col-md-4 text-md-start">
        <p>(903) 123-4567</p>
        </div>
        <div class="col-md-4 text-md-center">
            <p>910 Main Ln Austin, Tx 00000</p>
        </div>
        <div class="col-md-4 text-md-end">
            <p><a herf="mailto:unmadeemail@example.com" class="text-black">unmadeemail@example.com</a></p>
        </div>
        </div>
        </div>
        </footer>


    }
}
customElement.define('footer-component', FooterComponent);