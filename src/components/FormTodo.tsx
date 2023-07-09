import { FC, useState } from "react"
import ItemTask from "../components/itemTask";
import { v4 as uuid } from 'uuid';
interface ItemTask {
    id: string,
    text: string
}
const Form: FC = () => {
    // list task
    const [tasks, setTasks] = useState<ItemTask[]>([]);
    const [valueTask, setValueTask] = useState<string>('');

    // add task
    const handleAddTask = () => {
        if (valueTask) {
            const newTask: ItemTask = {
                id: uuid(),
                text: valueTask,
            };
            setTasks(prew => [...prew, newTask])
            setValueTask('')
        }
    }
    // delete task
    const deleteTask = (_id: string) => {
        setTasks(tasks.filter((item) => item.id !== _id))
    }

    return (
        <>
        <h1>Управляйте задачами. Добавляйте, удаляйте, достигайте результатов.</h1>
            <form>
                <div className="wrap_addTask">
                    <input placeholder="Завтра на примем к врачу" className="value" type="text" onChange={(e) => setValueTask(e.target.value)} value={valueTask} />
                    <input className="btn" type="button" value="Добавить" onClick={handleAddTask} />
                </div>
                <ItemTask task={tasks} idTask={deleteTask} />
            </form>
        </>
    )
}
export default Form;



