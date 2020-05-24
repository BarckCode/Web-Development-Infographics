import React from 'react'
import styled from '@emotion/styled'
import { v4 as uuidv4 } from 'uuid';

const Container = styled.figure`
  width: 100%;
  margin: 2rem auto 0 auto;
`

const Image = styled.img`
  width: 100%;
  border-radius: 25px;
`

const Infographics = ({ background }) => {

  const javascript = [
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fjavascript%2Fjavascript-arrowFunctions%E2%80%931.png?alt=media&token=17b14e01-b4f6-4a62-bcca-7a478f739968'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fjavascript%2Fjavascript-arrowFunctions%E2%80%932.png?alt=media&token=5479d97f-012b-4ef3-9bc5-e981e8475a93'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fjavascript%2Fjavascript-arrowFunctions%E2%80%933.png?alt=media&token=5d6dcb5d-894e-434b-acfd-4294d569f9f1'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fjavascript%2Fjavascript-arrowFunctions%E2%80%934.png?alt=media&token=3e5f7146-febe-4e7d-bc72-6c94a3c3c18b'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fjavascript%2Fjavascript-arrowFunctions%E2%80%935.png?alt=media&token=bc4ea689-e2f8-4315-9b68-b88db8518f76'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fjavascript%2Fjavascript-variables-1.png?alt=media&token=fff0e8d4-406c-4374-bfec-8cb1472ad9d6'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fjavascript%2Fjavascript-variables-2.png?alt=media&token=feb8b43a-1bfd-43af-98c1-6ccec29aad99'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fjavascript%2Fjavascript-variables-3.png?alt=media&token=6d18038c-b93a-47f4-b06e-f544befc9977'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fjavascript%2Fjavascript-history-1.png?alt=media&token=12323e9d-1f1e-4a6b-ac3d-b63d42bcb2d7'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fjavascript%2Fjavascript-history-2.png?alt=media&token=7cf87f1a-640d-4c7c-a140-d9ad6801fd5e'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fjavascript%2Fjavascript-history-3.png?alt=media&token=5dcd0eb7-7af1-480c-a5d9-774d033cdf99'},
  ]

  const css = [
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fcss%2Fcss-history-1.png?alt=media&token=1f5be206-84d2-4d06-a1e2-b6068cc2322b'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fcss%2Fcss-history-2.png?alt=media&token=3c04a8a4-4a31-4869-ad69-6f352c9d9237'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fcss%2Fcss-history-3.png?alt=media&token=c77fb4eb-9f35-4e7d-a5d3-4cce8c9dae6e'},
  ]

  const html = [
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fhtml%2Fhtml-history-3.png?alt=media&token=a6be84c7-f03f-4941-8637-95bf4e82324d'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fhtml%2Fhtml-history-2.png?alt=media&token=5cbf49bf-695d-40a7-96f7-25117dd1b45e'},
    {id: uuidv4(), url: 'https://firebasestorage.googleapis.com/v0/b/blog-barckcode.appspot.com/o/infografias%2Fhtml%2Fhtml-history-1.png?alt=media&token=3e4202ff-d06e-48ff-a37c-efc3cca95171'},
  ]

  let infographics
  if(background === 'javascript') {
    infographics = javascript
  } else if(background === 'css') {
    infographics = css
  } else {
    infographics = html
  }

  return (
    <section>
      {infographics.map(infographic => (
        <div key={infographic.id} className={`${background}-neumorphism`}>
          <Container>
            <Image src={infographic.url} alt='Infographic' />
          </Container>
        </div>
      ))}
    </section>
  )
}

export default Infographics
