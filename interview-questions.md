# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: You can edit it to add it by using a patch request and putting in the foreign key. The foreign key name will be Cohort with a capital c. The foreign key would be on the cohort model.

  Researched answer: To associate two tables a foreign key has to be assigned in the belongs_to side of the association. So the foreign key would be assigned to the Student model since the Cohort 'has_many' students and Student 'belongs_to' Cohort model. To add a foreign key to the Student model you can do a migration using $ rails generate migration add_foreign_key :students, :cohorts, :string. The name of the foreign key should be cohorts_id.



2. Which RESTful routes must always be passed params? Why?

  Your answer: Get, delete, patch, because they need it to know where to send the data.

  Researched answer: Create, Edit, Update and Delete requires params, because they are making active changes of the information within the database. Params are needed to explain exactly what it is going to change within the database as well as create restrictions on what can or cannot be changed within the database to maintain an organized, accurate, and secure database structure. 



3. Name three rails generator commands. What is created by each?

  Your answer: Get, Post, Delete. 

  Researched answer: The $rails generate controller command creates the controller which coordinates the interaction between the user, the view, and the model. The controller works like the brain as it is the center for which connections to all other points are made. It is responsible for routing external requests to internal actions.
  The $rails generate model command creates the model which is the database of information stored in tables and rows. 
  The $rails generate migration creates a new migration in the file, updating the database with changes. 



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students         students#index  - display all students
     
method="POST"   /students         students#create  - create a new student instance

method="GET"    /students/new     students#new  -return an HTML form for creating a new student instance

method="GET"    /students/2       students#show   - display a specific student from the database
  
method="GET"    /students/2/edit  students#edit   - return an HTML form for editing a student instance
    
method="PATCH"  /students/2       students#update   - update a specific student instance in the database
    
method="DELETE" /students/2       students#destroy  - delete a specific student in the database    



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. User will open app and see to do list
2. to do list will have login for multiple users
3. Top left corner will have + sign to add tasks
4. Top right corner will have negative to delete tasks
5. When + pressed, empty task with subject and content will open
6. When content is entered, if there is no subject, to do will post with NO SUBJECT in subject line
7. When tasks are added, date is  put in front of task
8. Tasks are sorted by last opened task
9. Button for delete all tasks
10. Color coding for tasks


