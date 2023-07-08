const users = [
  {
    name: "Jack Smith",
    age: 23,
    img: "https://www.svgrepo.com/show/10103/man.svg",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        mark: 20,
      },
      {
        title: "Java Enterprise",
        mark: 100,
      },
    ],
  },
  {
    name: "Amal Smith",
    age: 20,
    img: "https://www.svgrepo.com/show/113567/indian.svg",
    role: "student",
  },
  {
    name: "Noah Smith",
    age: 43,
    img: "https://www.svgrepo.com/show/48218/man.svg",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        mark: 50,
      },
    ],
  },
  {
    name: "Charlie Smith",
    age: 18,
    img: "https://www.svgrepo.com/show/169746/man.svg",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        mark: 75,
      },
      {
        title: "Java Enterprise",
        mark: 23,
      },
    ],
  },
  {
    name: "Emily Smith",
    age: 30,
    img: "https://www.svgrepo.com/show/161467/woman.svg",
    role: "admin",
    courses: [
      {
        title: "Front-end Pro",
        score: 10,
        lector: "Leo Smith",
      },
      {
        title: "Java Enterprise",
        score: 50,
        lector: "David Smith",
      },
      {
        title: "QA",
        score: 75,
        lector: "Emilie Smith",
      },
    ],
  },
  {
    name: "Leo Smith",
    age: 53,
    img: "https://www.svgrepo.com/show/51654/professor.svg",
    role: "lector",
    courses: [
      {
        title: "Front-end Pro",
        score: 78,
        studentsScore: 79,
      },
      {
        title: "Java Enterprise",
        score: 85,
        studentsScore: 85,
      },
    ],
  },
];

const usersBlock = document.querySelector('.users');

const rolesImg = {
	admin: "https://www.svgrepo.com/show/421614/admin-user-web.svg",
	student:"https://www.svgrepo.com/show/520508/student.svg",
	lector: "https://www.svgrepo.com/show/61229/professor.svg"
};

const ROLES = {
  "student": user => new Student(user),
  "admin": user => new Admin(user),
  "lector": user => new Lector(user)
}

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

function gradeMark(gradationObject, mark) {
  let grade = `test Grade`
  for (let key in gradationObject) {
    if (mark <= key) {
      grade = gradationObject[key]
      break
    }
  }
  return grade
};


class User {
  constructor(arg) {
    this.name = arg.name;
    this.age = arg.age;
    this.role = arg.role;
    this.img = arg.img;
    if(arg.courses) 
      this.courses = arg.courses
  }

  renderFullInfo() {
   return `
     <div class="user">
    	  <div class="user__info">
          <div class="user__info--data">
            <img src="${this.img}" alt="${this.name}" height="50">
            <div class="user__naming">
              <p>Name: <b>${this.name}</b></p>
              <p>Age: <b>${this.age}</b></p>
          </div>
        </div>
        <div class="user__info--role ${this.role}">
          <img src="${rolesImg[this.role]}" alt="${this.role}" height="25">
          <p>${this.role}</p>
        </div>
      </div>
      ${this.courses ? this.renderCourses() : ``}
    </div>`;
  }
  
  renderCourses() {
    let allCourse = this.courses
     .map(item => {
       return `<div class="user__courses--course ${this.role}">
        ${item.title} <span class="${gradeMark(gradation, item.mark)}">${gradeMark(gradation, item.mark)}</span>
       </div>`}).join('')
  
    return `<div class="user__courses">${allCourse}</div>`;
  } 
}
   
   
class Student extends User {
  constructor(arg) {
    super(arg)
  }
}

class Admin extends User {
  constructor(arg) {
    super(arg)
  }

  renderCourses() {
    let allCourse = this.courses
     .map(item => {
       return `<div class="user__courses--course ${this.role}">
         <p>Title: <b>${item.title}</b></p>
         <p>Admin's score: <span class="${gradeMark(gradation, item.score)}">${gradeMark(gradation, item.score)}</span></p>
         <p>Lector: <b>${item.lector}</b></p>
       </div>`}).join('')
     
    return `<div class="user__courses admin--info">${allCourse}</div>`;
  }
}

class Lector extends User {
  constructor(arg) {
    super(arg);
  }

  renderCourses() {
    let allCourse = this.courses
     .map(item => {
       return `<div class="user__courses--course ${this.role}">
         <p>Title: <b>${item.title}</b></p>
         <p>Lector's score: <span class="${gradeMark(gradation, item.score)}">${gradeMark(gradation, item.score)}</span></p>
         <p>Average student's score: <span class="${gradeMark(gradation, item.score)}">${gradeMark(gradation, item.score)}</span></p>
       </div>`}).join('')
     
    return `<div class="user__courses admin--info">${allCourse}</div>`;
  }
}

function renderUsers(array) {
  let users = array
    .map(user => ROLES[user.role] ? ROLES[user.role](user) : new User(user))
    .map(user => {
      console.log(user);
      return user;
    })
    .map(user => user.renderFullInfo()).join(``);

    usersBlock.innerHTML = users;
}
renderUsers(users);
