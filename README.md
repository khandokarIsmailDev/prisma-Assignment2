## This is [OSTAD](ostad.app) assignment project, there is no fronted design, only backend functionality. Please Use [Postman](https://www.postman.com/) to run this project.
This is a [Next.js](https://nextjs.org/) project with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Project Requirements
Will be in the user model - ( id, first_name, last_name, age, grade, courses )
Whose API you have to make -
- Creating API for single student registration.
- Create API for registering many students at once.
- Creating API to delete a single student.
- API needs to be created to update student information.
- An API needs to be created to show the data of a single student.
- API should be created to get all students together.

## Project Analysis And Evaluation

### Create Single Student Request:
-  http://localhost:3000/api/students/register

### Create Bulk Student Request:
-  http://localhost:3000/api/students/manyRegister

### Delete Request:
-  http://localhost:3000/api/students/delete?id=5

### Update Student Request:
-  http://localhost:3000/api/students/update?id=2

### Find Student Request:
- http://localhost:3000/api/students/find?id=10

### Show All Student Request:
-  http://localhost:3000/api/students




## Usage of Technologies
- [**Next js**]()
- [**Prisma**]()
- [**MySQL**]()























## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
