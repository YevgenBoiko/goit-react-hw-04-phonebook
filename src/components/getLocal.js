export default function onGetLocal() {
  const initialContacts = localStorage.getItem('contacts');
  const initialContactsParse = JSON.parse(initialContacts);

  if (initialContactsParse) {
    return initialContactsParse;
  }

  return [];
}
