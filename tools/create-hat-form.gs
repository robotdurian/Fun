/**
 * Creates the Sorting Hat guest form AND its response spreadsheet in your Google account.
 * 1. Go to script.google.com, New project, paste this file, Save.
 * 2. Pick createHatForm in the toolbar and press Run (approve the permissions prompt).
 * 3. Open View > Logs: it prints the link to send to guests and the link to the response sheet.
 * Keep the question wording: the Hat app finds each column by keywords in the header.
 */
function createHatForm() {
  const form = FormApp.create('The Hat wants to know you');
  form.setDescription('A few quick questions so the Sorting Hat can get to know you. There are no wrong answers!');

  form.addTextItem().setTitle('What should the Hat call you?').setRequired(true);
  form.addTextItem().setTitle('What is your favourite food?');
  form.addTextItem().setTitle('What is your favourite animal?');
  form.addTextItem().setTitle('What are you really, really good at?');
  form.addTextItem().setTitle('If you could have one magic power, what would it be?');

  form.addMultipleChoiceItem()
    .setTitle('A mysterious glowing door appears at the party. What do you do?')
    .setChoiceValues([
      'Fling it open straight away!',
      'Grab a friend first, doors are scarier alone',
      'Read the clues on it first',
      'Look for a secret shortcut around it']);
  form.addMultipleChoiceItem()
    .setTitle('Someone is being left out of the game. You...')
    .setChoiceValues([
      'Stand up and invite them in, loudly',
      'Sit with them and keep them company',
      'Work out why, then find a way to help',
      'Quietly fix it behind the scenes']);
  form.addMultipleChoiceItem()
    .setTitle('What do you most want your friends to say about you?')
    .setChoiceValues([
      'You are so brave!',
      'You are so kind!',
      'You are so clever!',
      'You never give up!']);

  const sheet = SpreadsheetApp.create('Sorting Hat answers');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  Logger.log('Send guests this link: ' + form.getPublishedUrl());
  Logger.log('Responses sheet: ' + sheet.getUrl());
}
