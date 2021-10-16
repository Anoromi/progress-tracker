export interface Task {
  title: string
  description: string
}

export interface Tasks {
  toDo: Task[]
  inProgress: Task[]
  done: Task[]
}

const tasksName = "Tasks"

export async function fetchData(): Promise<Tasks> {
  const info = await localStorage.getItem(tasksName)
  if (info != null) {
    console.log("Data Found")
    return JSON.parse(info) as Tasks
  }
  else {
    console.log("Data Not Found")
    return {
      toDo: [],
      inProgress: [],
      done: []
    }
  }
}

export function saveData(tasks: Tasks) : void{
  localStorage.setItem(tasksName, JSON.stringify(tasks))
}