// const Content = (props) => {
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [query, setquery] = useState('');

//   useEffect(() => {
//     props.fetchData();
//     console.log(props.data);
//     console.log('use effect');
//   }, []);
//   return (
//     <div>
//       <Search getQuery={(query) => setquery(query)} />
//       <CharacterGrid isLoading={isLoading} items={items} />
//     </div>
//   );
// };

// export default connect(mapStateToProps, { fetchData })(Content);

import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import { fetchData } from '../../redux/actions/dataActions';

import CharacterGrid from '../characters/CharacterGrid';
import Search from './Search';
import Spinner from '../ui/Spinner';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      query: '',
    };
  }

  componentDidMount() {
    this.props.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      console.log(this.props.data);
      this.setState({
        items: this.props.data,
      });
    }
  }

  searchByName() {
    return this.state.items.filter((item) =>
      item.name.toLowerCase().includes(this.state.query.toLowerCase())
    );
  }

  render() {
    return this.state.items.length === 0 ? (
      <Spinner />
    ) : (
      <div>
        <Search getQuery={(query) => this.setState({ query: query })} />
        <CharacterGrid items={this.searchByName()} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.data.items,
});
export default connect(mapStateToProps, { fetchData })(Content);
