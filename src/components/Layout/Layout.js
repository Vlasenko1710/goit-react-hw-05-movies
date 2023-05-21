import { Container } from 'components/App/App.styled';
import Loading from 'components/Loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link, Nav } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Nav>
        </Container>
      </Header>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}
