import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "link"];

  disable(event) {
    this.buttonTarget.disabled = true;
    this.buttonTarget.innerText = 'clicked';
    this.linkTarget.classList.remove('d-none');
  }

  reset(event) {
    event.preventDefault();

    event.currentTarget.classList.add('d-none');
    this.buttonTarget.innerText = 'Click me';
    this.buttonTarget.disabled = false;
  }
}

