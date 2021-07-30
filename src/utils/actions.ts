export default {
  call() {
    window.open('tel://+33770473953', '_self')
  },
  email() {
    window.open('mailto:arthur.briere@outlook.fr', '_self')
  },
  openUrl(url: string): void {
    window.open(url, "_blank");
  }
}