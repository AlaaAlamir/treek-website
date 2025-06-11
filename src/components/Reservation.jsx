import { useState } from 'react';
import { useParams } from 'react-router-dom'
import services from './Service';
import Swal from 'sweetalert2'

const Reservation = () => {

    const { slug } = useParams();
    const service = services.find(s => s.slug === slug);
    const [budget, setBudget] = useState(5000);

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [date,setDate]=useState("");
    const [describe,setDescribe]=useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "تم حجز خدمتك بنجاح! سنكون على تواصل معك قريبًا لإكمال التفاصيل",
      showConfirmButton: false,
      timer: 4000
    });

    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setDescribe("");
  };
    return (
        <div class="container mt-5 mb-5 d-flex justify-content-center p-3" dir='rtl'>
            <div class="card-cart">
                <h2 class="title mb-3">اتمام الحجز</h2>
                <div>
                    <div className='row'>
                        <div className='col d-flex justify-content-center'>
                            <h4>الخدمة : {`${service.name}`}</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col d-flex justify-content-center'>
                            <img src={`/${service.photo}`} height={180} className='mb-3 rounded text-center' />
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='row mt-3 mb-3'>
                            <div className='col'>
                                <label htmlFor='name' className='form-label'>الأسم الثلاثي :</label>
                                <input type='text' name='name' value={name} className='form-control'
                                onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className='col'>
                                <label htmlFor='email' className='form-label'>
                                    البريد الإلكتروني :
                                </label>
                                <input type='email' name='reservation-email' value={email} className='form-control'
                                onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div className='row mt-3 mb-3'>
                            <div className='col'>
                                <label htmlFor='phone' className='form-label'>رقم الهاتف :</label>
                                <input type='tel' name='phone' value={phone} className='form-control' placeholder="05xxxxxxxx"
                                pattern="05[0-9]{8}" onChange={(e) => setPhone(e.target.value)} required />
                            </div>
                            <div className='col'>
                                <label htmlFor='email' className='form-label'>
                                    التاريخ :
                                </label>
                                <input type='date' name='date' value={date} className='form-control'
                                onChange={(e) => setDate(e.target.value)} required />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col'>
                                <label htmlFor='range' className='form-label'>الميزانية :</label>
                                <input type='range' name='range' className='form-range'
                                    min="500" max="10000" step="500" value={budget}
                                    onChange={(e) => setBudget(e.target.value)} required/>
                                <div className="d-flex justify-content-between">
                                    <span>500 ريال</span>
                                    <span>{budget} ريال</span>
                                    <span>10000 ريال</span>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col'>
                                <label htmlFor='describe' className='form-label'>صف فكرتك أو مشروعك :</label>
                                <textarea name='describe' value={describe} className='form-control' dir='rtl'
                                    onChange={(e) => setDescribe(e.target.value)} rows={7} placeholder='أحتاج إلى تصميم هوية بصرية لمقهى جديد يشمل الشعار والألوان وبطاقات العمل...' required/>
                            </div>
                        </div>
                        <div className='row mt-4 d-flex justify-content-center'>
                            <div className='col d-flex justify-content-center'>
                                <button type='submit' className='btn btn-primary bt text-center'
                                > حجز
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reservation;