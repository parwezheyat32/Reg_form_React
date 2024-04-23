import './form.css'
function Form(){
    return(
        <>
        <header>
          <h1>Registration Form</h1>
        </header>
        <section>
          <form action="#" id='formData'>
            <div>
            <label htmlFor="name">Name:</label>
            </div>
            <div className='input'>
            <input type="text" id='name' placeholder='enter your name...' />
            </div>

            <div>
            <label htmlFor="email">Email:</label>
            </div>
            <div className='input'>
            <input type="email" id='email' placeholder='enter your email...' />
            </div>
            
            <div>
            <label htmlFor="mobile">Mobile:</label>
            </div>
            <div className='input'>
            <input type="number" id='mobile' placeholder='enter your mobile...' />
            </div>

            {/* <div>
            <label htmlFor="gender">Gender:</label>
            </div>
            <div className='gender'>
            <span className='male'>Male
            <input type="radio"  name='gender' />
            </span>
            <span className='female'>female
            <input type="radio" name='gender'  />
            </span>
            </div> */}
            

            <div>
              <label htmlFor='address'>Address:</label>
            </div>
            <div className='input msg'>
              <textarea name="address" id="address" cols="20" rows="3" placeholder='enter your address...'></textarea>
            </div>

            <div className='btn'>
              <button className='submit'>Submit</button>
              <button className='reset'>Reset</button>
            </div>

          </form>
        </section>
        </>

    );
}

export default Form;