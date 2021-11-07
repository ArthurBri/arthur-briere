export function call() {
  window.open('tel://+33770473953', '_self')
}

export function email() {
  window.open('mailto:arthur.briere@outlook.fr', '_self')
}

export function openUrl(url: string): void {
  window.open(url, "_blank");
}