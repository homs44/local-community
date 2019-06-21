import React, { Component } from 'react'
import { Container, Segment, Breadcrumb } from 'semantic-ui-react'
import styled, { css } from 'styled-components'
import palette from '../../constant/palette'

const StyledSegment = styled(Segment)`
    &&&{
        margin-top:0;
        border-radius:0;
        color:${palette.white};
        background-color:${palette.secondary};
    }
`

const StyledSection = styled(Breadcrumb.Section)`
    &&&{
        ${props => props.link && css`
            color:${palette.primary}
        ` }
    }
`

const StyledDivider = styled(Breadcrumb.Divider)`
    &&&&{
        color:${palette.white}
    }
`
class Navigation extends Component {

    static defaultProps = {
        list: []
    }

    render() {
        const { list } = this.props;

        const sections = [];
        list.forEach((item, index) => {
            sections.push(
                <StyledSection
                    key={2 * index + 1}
                    link={!!item.onClick}
                    onClick={item.onClick}>{item.name}
                </StyledSection>)
            if (index !== list.length - 1) {
                sections.push(
                    <StyledDivider
                        key={2 * index}
                    />)
            }
        });

        return (
            <StyledSegment>
                <Container>
                    <Breadcrumb size="large">
                        {sections}
                    </Breadcrumb>
                </Container>
            </StyledSegment>
        )
    }
}

export default Navigation;