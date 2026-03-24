interface OrderSuccessModalProps {
  open: boolean;
  onChange: (value: boolean) => void;
}

const OrderSucessModal = ({ open, onChange }: OrderSuccessModalProps) => {
  if (!open) return null

  return (
    <main className="fixed inset-0  flex items-center justify-center bg-black/50">
      {/* Modal box */} 
      <div className="bg-white w-[500px] rounded-md p-6 relative">
        <h1 className="text-xl font-semibold">Thank you</h1>
        <p  className="mt-2">Order placed successfully</p>

        <button
          onClick={() => onChange(false)} 
          className="mt-6 bg-[#Db4444] text-white px-6 py-2 rounded-sm"
        >
          Close  
        </button>
      </div>
    </main>
  )
}

export default OrderSucessModal
