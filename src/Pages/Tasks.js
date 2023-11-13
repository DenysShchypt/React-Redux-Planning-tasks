import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/tasks/operations";
import { selectIsLoading } from "redux/tasks/selectors";


export default function Tasks() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(()=>{dispatch(fetchTasks())},[dispatch])
    return (
        <>
            <Helmet>
                <title>Your tasks</title>
            </Helmet>
            <TaskForm />
            <div>{isLoading && 'Request in progress...'}</div>
            <TaskList/>
        </>
    )
}

