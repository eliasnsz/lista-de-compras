import { ItemsTable } from "../components/ItemsTable";

import DefaultContainer from "../components/DefaultContainer";
import Header from "../components/Header";

export default function Checklist() {

  return (
    <>
      <DefaultContainer>
        <Header page="checklist"/>
        <ItemsTable/>
      </DefaultContainer>
    </>
  )
}