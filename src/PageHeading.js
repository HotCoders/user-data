import {Headings} from './Styled/About.styled'

const PageHeading = (props) => {
    return(
        <Headings>
            { props.pageTitle }
       </Headings>
    )
}

export default PageHeading;