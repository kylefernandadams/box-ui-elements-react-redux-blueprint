import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { ContentExplorer } from 'box-ui-elements';
import messages from 'box-ui-elements/i18n/en-US';
import 'box-ui-elements/dist/explorer.css';
import { fetchExplorerToken } from '../../actions';

class BoxContentExplorer extends Component {

    componentDidMount() {
        this.props.fetchExplorerToken();
    }

    render() {
        let { explorer_token } = this.props;
        if((typeof explorer_token !== 'string') || (!explorer_token)) {
            return( 
                <div className="spinner">
                    <ScaleLoader 
                        sizeUnit={"px"}
                        size={150}
                        color={'#0061D5'}
                        loading={true}
                    />
                </div>
            ); 
        } 
        return(
            <ContentExplorer 
                token={explorer_token}
                language='en-US'
                messages={messages}
                sortBy={'name'}
                sortDirection={'ASC'}
                canUpload={true}
            />
        );
    }
}

function mapStateToProps(state) {
    return { explorer_token: state.explorer_token };
};

export default connect(mapStateToProps, { fetchExplorerToken })(BoxContentExplorer);