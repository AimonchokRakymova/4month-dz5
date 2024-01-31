import './App.css';
import User from './Components/user/user';
import Modal from './Components/modal/Modal';
import { useEffect, useState } from 'react';
import Input from './Components/input/Input';
import CountPage from "./Pages/CountPage/CountPage";
import Button from './Components/button/Button';
import Todo from './Components/todo/Todo';
import TodoList from './Components/TodoList/TodoList';
import UsersPage from './Pages/UsersPage/UsersPage';
import PokemonsPage from './Pages/PokemonsPage/PokemonsPage';


function App() {
    const [ show, setShow ] = useState(false);
    const [ input, setInput ] = useState('');
    const [ local, setLocal ] = useState([]);
    console.log(local, 'locallocallocallocallocal');
    const [ searchInput, setSearchInput ] = useState('');
    const [ tasks, setTasks ] = useState([]);
    const [ users, setUsers ] = useState([]);
    const handleShow = () => setShow(prevState => !prevState);

    const BASE_URL = 'https://jsonplaceholder.typicode.com/';
    const getApi = async(endpoint) => {
        const data = await fetch(BASE_URL + endpoint);
        console.log(data);
        const users = await (data.json());
        console.log(users, 'usersusersusersusersusers');
        // localStorage.setItem('todos', JSON.stringify(todos));
        setUsers(users)
    };

    const getFromLocalStorage = () => {
        setLocal(JSON.parse(localStorage.getItem('todos')));
    };


    const handleAdd = () => {
        setTasks(prev => [ ...prev, {
                id: tasks.length === 0 ? 1 : tasks[ tasks.length - 1 ].id + 1,
                task: input
            }
            ]
        );
        console.log(tasks);
    };

    const handleEdit = (newTitle) => {
        console.log(newTitle, 'handleEdit');
        tasks.map(task => {
            if (task.id === newTitle.id) {
                return task.title = newTitle.title;
            }
        });
        setTasks(tasks);
    };
    const handleDone = (id) => {
        console.log(id, 'done');
        tasks.map(task => {
            if (task.id === id) {
                return task.completed = !task.completed;
            }
            return tasks;
        });
        setTasks([ ...tasks ]);
    };

    const onChangeInput = (event) => {
        setInput(event.target.value);
    };
    const handleSearch = (event) => {
        setSearchInput(event.target.value);
        const filteredTasks = tasks.filter(task =>
            task.title.toLowerCase().includes(event.target.value.toLowerCase()));
        setTasks(filteredTasks);
    };
    const handleDelete = (id) => {
        console.log(id);
        const deleted = tasks.filter(task => task.id !== id);
        setTasks(deleted);
    };

    const [ filterOption, setFilterOption ] = useState('completed');
    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
    };
    const filterTasks = tasks.filter(task => {
        switch(filterOption) {
            case 'all':
                return true;
            case 'completed':
                return task.completed;
            case 'notCompleted':
                return !task.completed;
            default:
                return true;
        }
    });

    useEffect(() => {
      const myLocalStorage = JSON.parse(localStorage.getItem('todos'));
      if (myLocalStorage === null) {
        return localStorage.setItem('todos', JSON.stringify(tasks));
      }
      if (myLocalStorage.length !== 0) {
        setTasks(myLocalStorage);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(tasks));
    }, [ tasks ]);

    const limit=5
    const offset = 10
    useEffect(() => {
        getApi(`users`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error("Ошибка!", error);
            });
    }, []);


    return (
        <div>
            {/*<div>*/}
            {/*    <select value={filterOption} onChange={handleFilterChange}>*/}
            {/*        <option value="all">Все таски</option>*/}
            {/*        <option value="completed">Выполненные</option>*/}
            {/*        <option value="notCompleted">Не выполненные</option>*/}
            {/*    </select>*/}
            {/*</div>*/}
            {/*{*/}
            {/*    show &&*/}
            {/*    <Modal*/}
            {/*        handleShow={handleShow}*/}
            {/*        onChangeInput={onChangeInput}*/}
            {/*        handleAdd={handleAdd}*/}
            {/*    >*/}
            {/*    </Modal>*/}
            {/*}*/}

            {/*<Button action={() => getApi('users')} text={'getTodos'}/>*/}
            {/*<Button action={() => getFromLocalStorage()} text={'getFromLocalStorage'}/>*/}
            {/*<Button action={handleShow} text={'открыть'}/>*/}
            {/*<Input placeholder={'поиск'} type={'search'} onChangeInput={handleSearch}/>*/}
            {/*<TodoList*/}
            {/*  tasks={filterTasks}*/}
            {/*  handleDelete={handleDelete}*/}
            {/*  handleDone={handleDone}*/}
            {/*  handleEdit={handleEdit}*/}
            {/*/>*/}
            <UsersPage users={users}/>
            <PokemonsPage/>
        </div>
    );
}


export default App;
