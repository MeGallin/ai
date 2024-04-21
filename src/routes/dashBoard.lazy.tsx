import { createLazyFileRoute } from '@tanstack/react-router';
import DashBoardComponent from '../components/DashBoard/DashBoardComponent';

export const Route = createLazyFileRoute('/dashBoard')({
  component: () => (
    <>
      <DashBoardComponent/>
    </>
  ),
});