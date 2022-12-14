import { Link, useForm } from '@inertiajs/inertia-react';
import { Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import InputGroup from '@ts/Components/form/InputGroup';
import BreadcrumbsHome from '@ts/Layouts/components/breadcrumbs-home';
import DashboardLayout from '@ts/Layouts/DashboardLayout';
import { backOnClick } from '@ts/utils/helpers';
import React from 'react';
import route from 'ziggy-js';

export default function Add() {
  const { data, setData, errors, post, processing } = useForm<App.Models.ProdukKategori>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('produk_kategori.add'));
  };

  return (
    <DashboardLayout breadcrumbs={<Bread />}>
      <Card className="mt-20">
        <CardHeader variant="gradient" color="blue-gray" className="px-4 mr-auto h-10 place-items-center flex w-auto ">
          Tambah Kategori
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody>
            <div className="flex flex-col md:flex-row md:gap-2 mb-3">
              <div className="w-full md:w-1/2 mb-4">
                <InputGroup error={errors.name} value={data.name} label="Nama Kategori" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('name', e.target.value)} />
              </div>
              <div className="w-full md:w-1/2 ">
                <InputGroup error={errors.description} value={data.description} label="Deskripsi Kategori" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('description', e.target.value)} />
              </div>
            </div>
          </CardBody>
          <CardFooter className="flex  gap-7 pt-2">
            <Button disabled={processing} type="submit">
              Save
            </Button>
            <Button color="amber" type="reset" onClick={backOnClick}>
              Back
            </Button>
          </CardFooter>
        </form>
      </Card>
    </DashboardLayout>
  );
}

const Bread = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbsHome />
      <Link href={route('produk_kategori.master')} className="opacity-60">
        <span>Kategori Produk</span>
      </Link>
      <a href="#">
        <span>Tambah</span>
      </a>
    </Breadcrumbs>
  );
};
