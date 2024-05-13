import { useState } from 'react';
import * as style from '../../styles/form.css';
import * as styles from '../../styles/styles.css';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

interface FormData {
  name: string;
  email: string;
  services: string[];
  budget: string;
  message: string;
}

const Form = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    services: [],
    budget: '',
    message: '',
  });

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
  
    let newValue: string | string[] | boolean = value;
  
    if (type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked;
      newValue = isChecked
        ? [...formData.services, value] 
        : formData.services.filter(service => service !== value);
    }
  
    setFormData({ ...formData, [name]: newValue });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!formData.name || !formData.email) {
        throw new Error('Name and email are required');
      }

      const { data, error } = await supabase
        .from('form_submissions')
        .insert([formData]);

      if (error) {
        throw new Error(error.message as string);
      }

      setFormData({
        name: '',
        email: '',
        services: [],
        budget: '',
        message: '',
      });
      alert('Form submitted successfully!');
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <button className={styles.sharedButton} onClick={togglePopup}>Entre em contato!</button>
      {showPopup && (
        <div className={style.formContainer}>
          <div className={style.formPopup}>
            <form onSubmit={handleSubmit}>
              <div className={style.formGroup}>
                <label className={style.formLabel} htmlFor="name">
                  Nome
                </label>
                <input
                  className={style.formInput}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={style.formGroup}>
                <label className={style.formLabel} htmlFor="email">
                  Email
                </label>
                <input
                  className={style.formInput}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={style.formGroup}>
                <label className={style.formLabel}>
                  Em que serviços você está interessado?
                </label>
                <div>
                  <input
                    type="checkbox"
                    id="service1"
                    name="services"
                    value="New web project"
                    checked={formData.services.includes('New web project')}
                    onChange={handleChange}
                    className={style.formCheckbox}
                  />
                  <label htmlFor="service1">{' '}Novo projeto de site</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="service2"
                    name="services"
                    value="Website migration"
                    checked={formData.services.includes('Website migration')}
                    onChange={handleChange}
                    className={style.formCheckbox}
                  />
                  <label htmlFor="service2">{' '}Migração do site</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="service3"
                    name="services"
                    value="Programming services"
                    checked={formData.services.includes('Programming services')}
                    onChange={handleChange}
                    className={style.formCheckbox}
                  />
                  <label htmlFor="service3">{' '}Serviços de programação</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="service6"
                    name="services"
                    value="Not sure yet"
                    checked={formData.services.includes('Not sure yet')}
                    onChange={handleChange}
                    className={style.formCheckbox}
                  />
                  <label htmlFor="service6">{' '}Não tenho certeza ainda</label>
                </div>
              </div>
              <div className={style.formGroup}>
                <label className={style.formLabel}>
                  Qual é o seu orçamento? (opcional)
                </label>
                <select
                  className={style.formSelect}
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">N/A</option>
                  <option value="$250—$500">$250—$500</option>
                  <option value="$500—$800">$500—$800</option>
                  <option value="$800—$1k">$800—$1k</option>
                  <option value="+$1k">+$1k</option>
                </select>
                <span className={style.formSelectText}>US Dollars</span>
              </div>
              <div className={style.formGroup}>
                <label className={style.formLabel} htmlFor="message">
                  Porfavor descreve o que você precisa
                </label>
                <textarea
                  className={style.formTextarea}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className={style.formButton} type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;