import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import DeleteConfirm from "./components/DeleteConfirm";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import TaskShow from "./components/TaskShow";
class App extends Component {
  state = { TaskComponent: false, edit: false, forb: { id: 0 }, delete: false, Forbs: [] }

  getAllTasks = async () => {
    this.setState({ delete: false })
    let { data: Forbs } = await axios.get("http://localhost:5000");
    this.setState({ Forbs })
    return Forbs;
  }
  deleteConfirm = async () => {
    let id: number = this.state.forb.id;
    let { data: ForbsDelete } = await axios.delete(`http://localhost:5000/${id}/delete`);
    console.log('ForbsDelete', ForbsDelete)
    this.getAllTasks()
    this.setState({ edit: false })
    this.setState({ delete: false })
  }
  setTaskEdit = (i: any) => {
    this.setState({ TaskComponent: i })
    this.setState({ edit: true, delete: false })

  }
  setTaskDelete = (i: any) => {

    console.log('i', i)
    this.setState({ edit: false, delete: i })
    this.setState({ forb: this.state.Forbs[i] })
  }
  setTask = (i: any) => {
    this.setState({ TaskComponent: i })
    this.setState({ edit: false })
    this.setState({ delete: false })
  }
  setForb = (forb: Object) => this.setState({ forb })
  setForbs = (Forbs: Array<any>) => this.setState({ Forbs })

  onChange = (key: any, value: any) => {
    // console.log('key', key)
    // return console.log('value', value)
    let forb: any = { ...this.state.forb }
    forb[key] = value
    this.setState({ forb })
    console.log('forb', forb, this.state.forb)
    // console.log('key', key, 'value', value)
  }

  render() {
    let deleteConfirmModal = <DeleteConfirm
      deleteConfirm={this.deleteConfirm}
      delete={this.state.delete}
      setTaskDelete={this.setTaskDelete} />

    if (!this.state.delete) deleteConfirmModal = <span></span>;

    const mainWindow = this.state.TaskComponent !== false ?
      <TaskShow setTask={this.setTask}
        setForb={this.setForb}
        forb={this.state.forb}
        onChange={this.onChange}
        TaskComponent={this.state.TaskComponent}
        edit={this.state.edit} />
      : <Table
        getAllTasks={this.getAllTasks}
        Forbs={this.state.Forbs}
        setForbs={this.setForbs}
        setTaskDelete={this.setTaskDelete}
        setTask={this.setTask}
        setTaskEdit={this.setTaskEdit} />



    return <div>
      <Navbar />
      <div className="container mt-4">
        <h1>HI REACT</h1>
        {mainWindow}
        {deleteConfirmModal}
      </div>
    </div>

  }

}



export default App;
