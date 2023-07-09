import { FC } from "react"
interface taskType {
    id: string,
    text: string
}
interface ListTask {
    task: taskType[],
    idTask: (_id: string) => void
}
const ItemTask: FC<ListTask> = ({ task, idTask }) => {
    const elementTask = task.map(item => {
        return (
            <div key={item.id}>
                <span>{item.text}</span>
                <input onClick={() => idTask(item.id)} type="button" className="deleteBtn" value='Удалить' />
            </div>
        )
    })
    return (
        <>
            <div className="item-task">
                {elementTask}
            </div>
        </>
    )
}
export default ItemTask;
