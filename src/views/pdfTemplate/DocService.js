import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html) => {
    savePDF(html, { 
      paperSize: 'Letter',
      fileName: 'form.pdf',
      margin: 1
    })
  }
}

const Doc = new DocService();
export default Doc;