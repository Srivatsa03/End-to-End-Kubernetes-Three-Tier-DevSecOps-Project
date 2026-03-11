import axios from "axios";
const apiUrl = process.env.REACT_APP_BACKEND_URL || "http://k8s-threetie-mainlb-b5b9250791-2093763814.us-east-1.elb.amazonaws.com/api/tasks";
console.log(apiUrl)
export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
