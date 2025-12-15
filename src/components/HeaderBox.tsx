export default function Header({type, tittle, subtext, user}: HeaderBoxProps) {
  return (
    <div> 
      {type}
      {tittle}
      {subtext}
      {user}
    </div>
  );
}