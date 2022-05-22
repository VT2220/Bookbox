import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAddress } from '../redux/actions/orders.action';
import { useTypedSelector } from '../useTypeSelector';

const AddressForm = () => {
  const [formObj, setFormObj] = useState({
    addressLine1: '',
    addressLine2: '',
    state: '',
    city: '',
    pincode: '',
  });
  const [error, setError] = useState('');
  const [isDisable, setIsDisable] = useState(false);

  const address = useTypedSelector((state) => state.orders.address);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(address).length) {
      setFormObj(address);
      setIsDisable(true);
    }
  }, []);

  const saveAddress = () => {
    if (Object.values(formObj).some((val) => val === '')) {
      setError('You have left one of the fields empty.');
    } else {
      if (formObj.pincode.length !== 6) {
        setError('Pincode must be of 6 digit');
        return;
      }
      if (Number.isNaN(Number(formObj.pincode))) {
        setError('Pincode must be a number');
        return;
      }
      setError('');
      dispatch(setAddress(formObj));
      setIsDisable(true);
      toast.success('Address has been saved successfully');
    }
  };

  const editAddress = () => {
    setIsDisable(false);
    toast.success('fields are now editable');
  };

  return (
    <form>
      <fieldset className="mt-5 flex flex-col gap-4" disabled={isDisable}>
        <div className="form-control w-full">
          <input
            id="address-line-1"
            type="text"
            maxLength={50}
            placeholder="Address line 1"
            className="default-border input w-full"
            value={formObj.addressLine1}
            onChange={(e) =>
              setFormObj((obj) => ({ ...obj, addressLine1: e.target.value }))
            }
          />
        </div>
        <div className="form-control w-full">
          <input
            id="address-line-2"
            type="text"
            maxLength={50}
            placeholder="Address line 2"
            className="default-border input w-full"
            value={formObj.addressLine2}
            onChange={(e) =>
              setFormObj((obj) => ({ ...obj, addressLine2: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col justify-between gap-2 sm:flex-row">
          <input
            id="state"
            type="text"
            placeholder="State"
            className="default-border input w-full"
            value={formObj.state}
            onChange={(e) =>
              setFormObj((obj) => ({ ...obj, state: e.target.value }))
            }
          />
          <input
            id="city"
            type="text"
            placeholder="City"
            className="default-border input w-full"
            value={formObj.city}
            onChange={(e) =>
              setFormObj((obj) => ({ ...obj, city: e.target.value }))
            }
          />
          <input
            id="pincode"
            type="text"
            maxLength={6}
            placeholder="Pincode"
            className="default-border input w-full"
            value={formObj.pincode}
            onChange={(e) =>
              setFormObj((obj) => ({ ...obj, pincode: e.target.value }))
            }
          />
        </div>
      </fieldset>
      <div className="mt-3">
        <div className="mb-2 text-xs text-red-500">{error}</div>
        <div>
          <button
            type="button"
            className="btn btn-primary mr-3"
            onClick={saveAddress}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={editAddress}
          >
            Edit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
