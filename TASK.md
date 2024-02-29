You are working on Back Office for poker gaming app and extending existing app with new module which shows information about players and perform operation for them. 

Player profile has the following infromation: 
- id
- username
- account status (Active, Locked)
- withdrawal status (Unlocked, Locked)

---

User should be able to:
- View data grid with players (consider you have hundreds of thousands players)
- Filter by id/username
- Select batch of players and perform account/withdarwal lock in batch (modal). In the future list of operations be extended

Batch operation has 3 steps: 
1. Choose actions - allows to lock account or withdarwal and shows how many players from selected already locked/unlocked. Components on step:
   1. Toggles for account/withdarwal lock
   2. Text with amount of locked/unlocked players for account/withdrawal lock
   3. 'Next'/'Prev' buttons that navigates to the next step/close modal
2. Confirm action - shows how many players will get selected status
   1. Text with amount of locked/unlocked players
   2. 'Next'/'Cancel' buttons that navigates to the next step/close modal
3. Execution - shows the progress of how many players were processed
   1. Action name
   2. Action processing status (total number of players, how many players processed successfuly, for how many players processing failed)
---

TASK 1 - Design:

1. Extend GraphQL contract that support read, sorting, filtration by basic columns
2. Design frontend solution that implement batch processing (components and their responsibilities)

TASK 2 - Data fetching:
1. Replace Empty page with Players module  
2. Mock Apollo client according to the suggested contract
3. Implement fetching players and save them in redux store
4. Extend data grid with all the columns from description

TASK 3 - Batch processing:
1. Implement batch processing

TASK 4 - Testing:
1. (*Optional) Add tests for implemented features
