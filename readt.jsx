const appTitle = "Todo list in React";

function DisplayItem({ item }) {
  const priorityLookup = {
    High: 'danger',
    Medium: 'warning',
    Low: 'success',
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input type="checkbox" className='mr-3' />
      <span>{item.name}</span>
      <span className={`badge badge-${priorityLookup[item.priority]}`}>
        {item.priority}
      </span>
    </li>
  );
}

function DisplayItemsComponent({ items }) {
  return (
    <div className="mt-5">
      <h4>Items todo</h4>
      <ul className='item-list list-group'>
        {items.map((item, index) => (
          <DisplayItem key={index} item={item} />
        ))}
      </ul>
      <p>{items.length} items in total</p>
    </div>
  );
}

function AddItemComponent({ onItemAdded }) {
  const [name, setName] = React.useState('');
  const [priority, setPriority] = React.useState('');

  const addItemClick = (e) => {
    e.preventDefault();
    onItemAdded({ name, priority });
    setName('');
    setPriority('');
  };

  return (
    <div>
      <h3>Add an item</h3>
      <form className="form-inline" onSubmit={addItemClick}>
        <input
          className="form-control mr-3 mb-2"
          placeholder="Task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="mr-1">Priority</label>
        <select
          className="form-control mr-5 mb-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Select priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Add item
        </button>
      </form>
    </div>
  );
}

function HomeComponent() {
  const [items, setItems] = React.useState([
    { name: "go to the shops", priority: 'Low' },
    { name: "make dinner", priority: 'Medium' },
    { name: "feed the dog", priority: 'High' },
  ]);

  const onItemAdded = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="container">
      <h1 className="mt-3">{appTitle}</h1>
      <main>
        <AddItemComponent onItemAdded={onItemAdded} />
        <DisplayItemsComponent items={items} />
      </main>
    </div>
  );
}


ReactDOM.render(<HomeComponent />, document.getElementById("root"));
