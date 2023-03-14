import DefaultContainer from "../components/DefaultContainer";
import ItemsTable from "../components/ItemsTable";
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