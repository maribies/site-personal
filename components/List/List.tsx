import css from "./list.module.css";

const renderListItems = (listData: string[]) => {
  return listData.map((item, index) => {
    return (
      <li key={index} value={item} className={css.item}>
        <p>{item}</p>
      </li>
    );
  });
};

export const UnorderedListComponent = (props: { listData: string[] }) => {
  return <ul>{renderListItems(props.listData)}</ul>;
};
