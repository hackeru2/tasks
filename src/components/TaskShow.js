import axios from "axios";
import React, { Component } from 'react';
class TaskShow extends Component {

    onBack = i => this.props.setTask(false)
    onUpdateorCreateTask = async () => {

        if (!this.props.forb.id) return this.onCreateTask()
        let payload = this.props.forb;
        try {
            let { data: forb } = await axios.put(`http://localhost:5000/api/task/${payload.id}/update`, payload);
            console.log(forb);
            this.props.success("משימה חדשה  עודכנה בהצלחה")
            this.onBack()
        } catch (error) {
            this.props.error(" משימה   לא עודכנה כראוי")
        }
    }

    onCreateTask = async () => {
        try {
            let payload = this.props.forb;
            let { data: forb } = await axios.post("http://localhost:5000/api/task/create", payload);
            console.log(forb);
            this.onBack()
            this.props.success("משימה חדשה נוספה בהצלחה")
        } catch (error) {
            this.props.error("משימה חדשה לא נוספה כראוי")
        }
    }
    async componentDidMount() {

        const index = this.props.TaskComponent;

        let { data: forb } = await axios.get("http://localhost:5000/" + index);
        // this.setState({ forb })
        await this.props.setForb(forb[0])

        console.log("tSHOW", this.props)
    }
    render() {
        const fields = ['username', 'tel', 'date', 'email'];
        let forb = this.props.forb
        let cardTitle = "צפייה"
        let createTxtBtn = "צור  חדש"

        if (this.props.edit) {
            cardTitle = "עריכה"
            createTxtBtn = "עדכן"
        }

        if (!forb) return <div />
        const fieldsLoop = fields.map(field => {
            if (forb[field] === "דוגמא") forb[field] = ""
            let nodeOutput = <div key={field}>{field} : {forb[field]} </div>
            if (this.props.edit) nodeOutput = (<div key={field} className="form-group">
                <label className="mt-1">{field}</label>
                <input value={forb[field]} type="email" className="form-control" onChange={e => this.props.onChange(field, e.target.value)} aria-describedby="emailHelp" placeholder="הקלד כאן" />
                <div>
                    {/* <input onChange={e => this.props.onChange(field, e.target.value)}


                        value={forb[field]} />
                    */}
                </div>
            </div>)
            return nodeOutput

        });


        //  = Object.values(this.props.forb).map((entry) => {
        //     entry = Object.entries(entry)
        //     console.log('entry', entry)
        //     let field = <input
        //         onChange={e => this.props.onChange(entry[0], e.target.value)}
        //         placeholder="הקלד ערך"
        //     // value={entry[1].replace('דוגמא', '')}

        //     />

        //     if (this.props.edit) field = <span>{entry[1]}</span>
        //     return (
        //         <div>{entry[0]} : {field}
        //         </div>
        //     )
        // }
        // )



        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="float-right">
                            <span className="right-table-title">{cardTitle}</span>
                        </div>
                        <a href="#" className="btn btn-success float-left mr-2" onClick={this.onUpdateorCreateTask}>{createTxtBtn}</a>
                        <a href="#" className="btn btn-outline-success float-left mr-2" onClick={this.onBack}>אחורה</a>

                    </div>
                    <div className="card-body">

                        {fieldsLoop}
                    </div>
                </div >
            </div >
        )

    }
}

export default TaskShow