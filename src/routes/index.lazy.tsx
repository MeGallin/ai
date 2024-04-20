import { createLazyFileRoute } from '@tanstack/react-router';
import HomeComponent from '../components/Home/HomeComponent';

export const Route = createLazyFileRoute('/')({
  component: () => (
    <>
      <HomeComponent/>
    </>
  ),
});