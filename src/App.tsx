import './App.module.css'
import "./global.css"

import styles from "./App.module.css"

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { List } from './components/List'
import { useState } from 'react'

export function App() {
  const [list, setList] = useState<string[]>([])
  const [newList, setNewList] = useState<string>("")
  const [invalid, setInvalid] = useState<boolean>(false)
  const [completed, setCompleted] = useState<number>(0)

  const taksCreate = list.length

  const itens = newList.length == 0 ? true : false

  function handleNewList(e: React.ChangeEvent<HTMLInputElement>) {
    setNewList(e.target.value)
  }

  function handleAddList() {
    if(newList.length < 5) {
      setInvalid(true)
      return
    }
    setList([...list, newList])
    setNewList("")
    setInvalid(false)
  }

  function handleDeleteList(itens: string) {
    setList(prevState => prevState.filter(list => list !== itens))
  }

  function handleChangeInvalid(e: React.FormEvent<HTMLInputElement>) {
    const input = e.target as HTMLInputElement
    input.setCustomValidity("Não esqueça de preencher este campo :)")
  }

  function handleAddOne() {
    setCompleted(completed + 1)
  }

  function handleDecrementOne() {
    if(completed <= 0) {
      setCompleted(0)
      return
    }
    setCompleted(completed - 1)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <div className={styles.addTaks}>
            <Input
              type='text'
              placeholder='Adiciona uma nova tarefa'
              value={newList}
              title='Preencha este campo.'
              required
              onInvalid={handleChangeInvalid}
              onChange={handleNewList}
            />
            <Button
              type='submit'
              disabled={itens}
              onClick={handleAddList}
            />
          </div>
          <div className={styles.invalid}>
            {
              invalid &&
                <span>
                  Digite ao menos 5 caractéries
                </span>
            }
          </div>
        </form>
        <section className={styles.taks}>
          <div className={styles.createTaks}>
            <div className={styles.create}>
              <span>Tarefas criadas</span>
              <small>{taksCreate}</small>
            </div>
            <div className={styles.completed}>
              <span>Concluídas</span>
              <small>{completed} de {taksCreate}</small>
            </div>
          </div>
          <div className={styles.list}>
            {
              list && list.map(itens => (
                <List
                  key={itens}
                  children={itens}
                  onDeleteList={() => handleDeleteList(itens)}
                  onCompleted={handleAddOne}
                  onDecrementOne={handleDecrementOne}
                />
              ))
            }
          </div>
        </section>
      </main>
    </div>
  )
}


