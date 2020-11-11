import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { Header, RepositoryInfo, Issues } from './style'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  // const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="github explorer" />
        <Link to="/">
          <FiChevronLeft size={24} />
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/31599313?s=460&u=a5ed76ec1c663eddc2d84f16e7257b4a19887172&v=4" alt="Vinicius" />
          <div>
            <strong>ViniciusRodrigues</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>10</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>80</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>


      <Issues>
        <Link to="adsfasdf">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
}

export default Repository