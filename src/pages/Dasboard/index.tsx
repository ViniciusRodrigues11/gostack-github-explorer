import React, { useState, useEffect, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'
import logoImg from '../../assets/logo.svg'
import { Title, Form, Repositories, Error } from './styles'
import Repository from '../Repository'
import { Link } from 'react-router-dom'

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}


const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepo = localStorage.getItem('@GitHubExplorer:repositories');

    if (storageRepo) {
      return JSON.parse(storageRepo)
    }

    return [];

  })

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()


    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`)
      console.log(response)
      const repository = response.data;
      setRepositories([...repositories, repository])
      setNewRepo('')
      setInputError('')
    } catch (err) {
      setInputError('Erro na busca por esse repositório')
    }
  }

  useEffect(() => {
    localStorage.setItem('@GitHubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories])

  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository} hasError={!!inputError}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o nome do repositório" />
        <button>Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>

        {repositories.map(repository => (
          <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>


    </>
  )
}

export default Dashboard