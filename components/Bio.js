import React from 'react'
import styled from 'styled-components'

export const Bio = () => (
  <>
    <Container>
      <Right>
        <Image src="https://avatars0.githubusercontent.com/u/6946766?s=460&v=4" />
        <Name>Yoshitaka Terazawa</Name>
        <LinkWrap>
          <span>Twitter: </span>
          <Link href="https://twitter.com/locol23" target="_blank" rel="noopener">
            @locol23
          </Link>
        </LinkWrap>
        <LinkWrap>
          <span>GitHub: </span>
          <Link href="https://github.com/locol23" target="_blank" rel="noopener">
            locol23
          </Link>
        </LinkWrap>
      </Right>
      <Left>
        <div>
          <Title>WORKING AT</Title>
          <Note>Gurunavi, Inc. as a frontend developer</Note>
        </div>
        <div>
          <Title>A MEMBER OF</Title>
          <Note>React Japan User Group</Note>
        </div>
        <div>
          <Title>FAVORITE</Title>
          <Note>React + TypeScript Architecture</Note>
        </div>
      </Left>
    </Container>
  </>
)

const Container = styled.div({ display: 'flex' })
const Right = styled.div({ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 32 })
const Image = styled.img({ width: 120, borderRadius: '50%', marginBottom: '16px' })
const Name = styled.h2({ fontSize: '2rem', margin: 0, marginBottom: 4 })
const LinkWrap = styled.p({ fontSize: '1.5rem', margin: 0, marginBottom: 4 })
const Link = styled.a({ color: '#fff', textDecoration: 'none' })
const Left = styled.div({ display: 'flex', flexDirection: 'column' })
const Title = styled.h2({ fontSize: '2rem', margin: 0, marginBottom: 4 })
const Note = styled.p({ fontSize: '1.5rem', margin: 0, marginBottom: 16 })

