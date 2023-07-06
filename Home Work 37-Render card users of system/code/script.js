const roles = {
	admin: "https://www.svgrepo.com/show/421614/admin-user-web.svg",
	student:"https://www.svgrepo.com/show/520508/student.svg",
	lector: "https://www.svgrepo.com/show/61229/professor.svg"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

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
        mark: 55,
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
        mark: 85,
      },
      {
        title: "Java Enterprise",
        mark: 20,
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
        score: 20,
        lector: "Leo Smith",
      },
      {
        title: "Java Enterprise",
        score: 55,
        lector: "David Smith",
      },
      {
        title: "QA",
        score: 85,
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
        score: 85,
        studentsScore: 85,
      },
      {
        title: "Java Enterprise",
        score: 85,
        studentsScore: 85,
      },
    ],
  },
];

class User {
  constructor(name, age, role, img, courses) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.img = img;
    this.courses = courses;
  }

  render() {
    document.write(`
    <div class="users">
      <div class="user">
	  	  <div class="user__info">
              <div class="user__info--data">
                  <img src="${this.img}" alt="${this.name}" height="50">
                    <div class="user__naming">
                      <p>Name: <b>${this.name}</b></p>
                      <p>Age: <b>${this.age}</b></p>
                   </div>
              </div>
          </div>
          <div class="user__info--role ${this.role}">
              <img src="${roles[this.role]}" alt="${this.role}" height="25">
              <p>${this.role}</p>
        </div>
	    </div>
    </div>
    `);
  }



  renderCourses() {
    this.courses?.forEach(function (course) {
      document.write(`
      <div class="users">
        <div class="user">
	        <div class="user__courses">
              <p class="user__courses--course ${this?.role}">
                ${course.title} <span class="${gradation[course.mark]}">${gradation[course.mark]}</span>
              </p>
            </div>
        </div>
      </div>
	    `);
    });
  }
}
 
 
class Student extends User {
  constructor(name, age, role, img, courses) {
    super(name, age, role, img, courses);
  }

  renderCourses() {
    super.renderCourses();
  }
}

class Lector extends User {
  constructor(name, age, role, img, courses) {
    super(name, age, role, img, courses);
  }

  renderCourses() {
    this.courses?.forEach(function (course) {
      document.write(`
      <div class="users">
        <div class="user">
          <div class="user__courses admin--info">
            <div class="user__courses--course lector">
               <p>Title: <b>${course.title}</b></p>
                <p>Lector's score: <span class="${gradation[course.score]}">${gradation[course.score]}</span></p>
                <p>Average student's score:
                <span class="${gradation[course.studentsScore]}">${gradation[course.studentsScore]}</span></p>
            /div>
          </div>
        </div>
      </div>
		`);
    });
  }
}

class Admin extends User {
  constructor(name, age, role, img, courses) {
    super(name, age, role, img, courses);
  }

  renderCourses() {
    this.courses?.forEach(function (course) {
      document.write(`
        <div class="users">
          <div class="user">
            <div class="user__courses admin--info">
                <div class="user__courses--course admin">
                    <p>Title: <b>${course.title}</b></p>
                    <p>Admin's score: <span class="${gradation[course.score]}">${gradation[course.score]}</span></p>
                   <p>Lector: <b>${course.lector}</b></p>
                </div>
            </div>
          </div> 
        </div>
		`);
    });
  }
}

users.forEach(function (user) {
  if (user.role === "student") {
    const student = new Student(
      user.name,
      user.age,
      user.role,
      user.img,
      user.courses
    );
    student.render();
    student.renderCourses();
  } else if (user.role === "lector") {
    const lector = new Lector(
      user.name,
      user.age,
      user.role,
      user.img,
      user.courses
    );
    lector.render();
    lector.renderCourses();
  } else {
    const admin = new Admin(
      user.name,
      user.age,
      user.role,
      user.img,
      user.courses
    );
    admin.render();
    admin.renderCourses();
  }
});
