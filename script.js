const timeout = 75;

createButton();

function createButton() {
  const modsToUpdate = document.querySelectorAll('#MySubscribedItems > .itemChoice:not(.inCollection)').length;

  if (!modsToUpdate) return;

  const button = document.createElement('span');

  button.innerHTML = `<span id="extensionSteamCollectionHelper">Add ${modsToUpdate} mods! (Subscribed items tab)</span>`;
  button.classList.add('btn_darkblue_white_innerfade', 'btn_medium');
  button.style.cssText = 'width: 100%; margin-top: 15px; text-align: center;';
  button.addEventListener('click', addAllMods);

  document.querySelector('.collectionAddItemsSection').appendChild(button);
}

function addAllMods() {
  const mods = document.querySelectorAll('#MySubscribedItems > .itemChoice:not(.inCollection)');
  const buttonSpan = document.querySelector('#extensionSteamCollectionHelper');

  for (let i = 0; i < mods.length; i++) {
    setTimeout(() => {
      buttonSpan.textContent = `Added ${i + 1} of ${mods.length} mods! Please wait. Estimated time left: ${Math.ceil((timeout * mods.length - timeout * (i + 1)) / 1000)} seconds`;
      mods[i].click();
    }, timeout * i);
  }
}
