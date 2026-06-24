import Book from '../models/book.model.js';

export const addBook = async(req,res)=>{
    try{
             const {title , author , category , quantity } = req.body;

                const book = await Book.create({
                    title,
                    author,
                    category,
                    quantity,
                });
                 res.status(201).json({
                    success: true,
                    book,
                });
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

export const getAllBooks = async(req,res)=>{
    try{
        const books = await Book.find()
        res.status(200).json({
            success: true,
            books,
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message: err.message,
        })
    }
}


export const updateBook = async (req,res)=>{
     try{
         const updatedBook = await Book.findByIdAndUpdate(
            req.prams.id,
            re.body,
            {new : true}
         ) 
         res.status(200).json({
             success: true,
             book: updatedBook,
         })
     }catch(err){
        res.status(500).json({
            success: true,
            message: err.message,
        })
     }
}



export const deleteBook = async (req,res)=>{
   await Book.findByIdAndDelete(req.params.id);

   res.status(200).json({
      success:true,
      message:"Book Deleted"
   })
}


