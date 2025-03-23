class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer class="footer bg-light text-dark py-3">
                <div class="container">
                    <div class="row">
                        <!-- Left-aligned phone number -->
                        <div class="col-md-4 text-md-start">
                            <p>(903) 123-4567</p>
                        </div>

                        <!-- Center-aligned address -->
                        <div class="col-md-4 text-md-center">
                            <p>910 Main Ln, Austin, TX 00000</p>
                        </div>

                        <!-- Right-aligned email -->
                        <div class="col-md-4 text-md-end">
                            <p><a href="mailto:unmadeemail@example.com" class="text-dark">unmadeemail@example.com</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}